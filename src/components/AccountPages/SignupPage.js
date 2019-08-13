import React from 'react';
import './SignupPage.css';
import AuthApiService from '../../services/auth-api-service';


export default class SignupPage extends React.Component{


  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { email, user_name, password, passwordRepeat} = ev.target;
    if(passwordRepeat.value!==password.value){
      return this.setState({
        error:'Passwords must match'
      })
    }

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email: email.value,
    })
      .then(user => {
        email.value = ''
        user_name.value = ''
        password.value = ''
        this.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  onRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }
  render(){
    const {error}=this.state;
    return(
      <form className='signup-box' onSubmit={this.handleSubmit}>
      <h1 className="signup-box-logo">
        TFT Comps
      </h1>
      <fieldset className='fieldset-style'>
          <legend>Sign up </legend>
          <div role='alert'>
          {error && <p className='red'>{error}</p>}
          </div>
          <p>
            <label htmlFor="signup-userid">Username</label><br/>
            <input type="text" name="user_name" id="signup-userid"/>
          </p>
          <p>
            <label htmlFor="signup-email">Email</label><br/>
            <input type="email" name="email" id="signup-email"/>
          </p>
          <p>
            <label htmlFor="signup-password">Password</label><br/>
            <input id="signup-password" name="password" type="password"/>
          </p>
          <p>
            <label htmlFor="signup-password-repeat">Repeat Password</label><br/>
            <input id="signup-password-repeat" name="passwordRepeat" type="password"/>
          </p>
      </fieldset>
      <button className="signup-sign-up"> Sign up </button> <br/>
      
    </form>
    );
  }
}
