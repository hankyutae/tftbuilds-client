import React from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
//import TftContext from '../../contexts/TftContext';

export default class LoginPage extends React.Component{

  state={error:null}
  //static contextType = TftContext
  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  onLoginSuccess = () => {
    const { location, history } = this.props;/* 
    const destination = (location.state || {}).from || '/'; */
    this.props.propForComponent();/* 
    history.push(destination) */
    history.goBack();
  }


  render(){
    const { error } = this.state;
    return(
      <form className='login-box'  onSubmit={this.handleSubmitJwtAuth}>
        
      <h1 className="login-box-logo">
        TFT Comps
      </h1>
      <fieldset className='fieldset-style'>
          <legend>Sign in </legend>
          <div role='alert'>
          {error && <p className='red'>{error}</p>}
          </div>
          <p>
            <label htmlFor="userid">Username</label><br/>
            <input type="text" name="user_name" id="userid"/>
          </p>
          <p>
            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" id="password"/>
          </p>
      </fieldset>
      <button className="login-sign-in" type='submit'> Sign in </button> <br/>
      <div className="login-helper">
        <div className="forgot-login">
          <p>
            <a>Forgot username?</a>
          </p>
          <p>
            <a>Forgot password?</a>
          </p>
        </div>
        <div className="login-signup-link">
          <p>
            <Link to='/signup'>Create account?</Link>
          </p>
        </div>
      </div>
    </form>

    );
  }
}
