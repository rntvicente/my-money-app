const mongoose = require('mongoose');
const debug = require('debug')('server:database');

mongoose.Promise = global.Promise;
const uri = 'mongodb://mymoney:myMoney1@ds159993.mlab.com:59993/my-money';

const options = {
  connectTimeoutMS: 1000,
  useNewUrlParser: true
};

const database = mongoose.connect(uri, options, (err) => {
  if (err) {
    debug(err.stack);
    return;
  }

  debug('Connect database success.');
});

mongoose.Error.messages.general.required = 'O Atributo {PATH} é obrigatório.';
mongoose.Error.messages.Number.min = 'O {VALUE} informado é menor que o limite de {MIN}.';
mongoose.Error.messages.Number.max = 'O {VALUE} informado é maior que o limite de {MAX}.';
mongoose.Error.messages.String.enum = '{VALUE} não é válido para o atributo {PATH}.';

module.exports = database;
