const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user-schema');
const env = require('../../../.env');

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorFromDB = (res, dbErros) => {
  const errors = [];

  _.forIn(dbErros.errors, error => errors.push(error.message));

  return res.status(400).json({ errors });
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      sendErrorFromDB(res, err);
      return;
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      const { name, email } = user;
      const token = jwt.sign(user, env.authSecret, {
        expiresIn: "1 day"
      });

      res.status(200).json({ name, email, token });
      return;
    }

    return res.status(400).send({ errors: ['User/Password invalid'] })
  });
};

const validateToken = (req, res) => {
  const { token } = req.body;

  jwt.verify(token, env.authSecret, (err, decoded) => {
    res.status(200).send({ valid: !err });
  });
};

const singup = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!email.match(emailRegex)) {
    return res.status(400).send({
      errors: ['E-mail invalid.']
    });
  } else if (!password.match(passwordRegex)) {
    return res.status(400).send({
      errors: ['Password must be uppercase, lowercase and special.']
    });
  }

  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);

  if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
    res.status(400).send({
      errors: ['Passwords do not match']
    });

    return;
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      return sendErrorFromDB(res, err);
    } else if (user) {
      return res.status(200).send({ errors: 'User exists.' });
    } else {
      const newUser = new User({ name, email, password: passwordHash });

      newUser.save(err => {
        if (err) {
          return sendErrorFromDB(res, err);
        }

        login(req, res, next);
      });
    }
  });
}

module.exports = {
  login,
  validateToken,
  singup
};