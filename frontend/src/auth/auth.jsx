import React from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { login, singup } from './auth-actions';
import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import Messages from '../common/msg/messages';
import Input from '../common/form/inputAuth';

import './auth.css';

const AUTH_FORM = 'authForm';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loginMode: true };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    const { login, singup } = this.props;

    this.state.loginMode ? login(values) : singup(values);
  }

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div className='login-box'>
        <div className='login-logo'><b> My</b> Money</div>
        <div className='login-box-body'>
          <p className='login-box-msg'>Bem vindo!</p>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
            <Field component={Input} type='input' name='name'
              placeholder='Name' icon='user' hide={loginMode} />
            <Field component={Input} type='email' name='email'
              placeholder='E-mail' icon='envelope' />
            <Field component={Input} type='password' name='password'
              placeholder='Password' icon='lock' />
            <Field component={Input} type='password' name='confirm_password'
              placeholder='Confirm Password' icon='lock' hide={loginMode} />
            <Row>
              <Grid cols='4'>
                <button type='submit'
                  className='btn btn-primary btn-block btn-flat'>
                  {loginMode ? 'Log In' : 'Register'}
                </button>
              </Grid>
            </Row>
          </form>
          <br />
          <a onClick={() => this.changeMode()}>
            {loginMode ? 'Register Here' : 'Already registered? Come in here!'}
          </a>
        </div>
        <Messages />
      </div>
    );
  }
};

Auth = reduxForm({ form: AUTH_FORM })(Auth);

const mapDispatchToProps = dispatch => bindActionCreators({ login, singup }, dispatch);

export default connect(null, mapDispatchToProps)(Auth);
