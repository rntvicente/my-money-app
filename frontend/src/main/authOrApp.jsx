import '../common/template/dependencies'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'


import App from './app'
import Auth from '../auth/auth'
import { validateToken } from '../auth/auth-actions'

class AuthOrApp extends React.Component {
  componentWillMount() {
    if (this.props.auth) {
      this.props.validateToken(this.props.auth.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    
    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token;
      
      return <App>{this.props.children}</App>
    } else if (!user && !validToken) {
      return <Auth />
    } else {
      return false
    }
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
