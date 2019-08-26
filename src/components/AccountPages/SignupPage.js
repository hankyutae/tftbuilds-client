import React from 'react';
import './SignupPage.css';
import AuthApiService from '../../services/auth-api-service';


export default class SignupPage extends React.Component {


  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { email, user_name, password, passwordRepeat } = ev.target;
    if (passwordRepeat.value !== password.value) {
      return this.setState({
        error: 'Passwords must match'
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
  render() {
    const { error } = this.state;
    return (
      <>
        <div className='svg-div'>
          <svg className='svg-gold' width="310" height="600">

            {/* <polyline className='hex-gold' points="150,0 300,87 300,260 150,346 0,260 0,87 150,0"/> */}

            <defs>
              <radialGradient id="grad2" cx="50%" cy="50%" r="90%" fx="50%" fy="50%">
                <stop offset="0%" className='offset1signin' />
                <stop offset="100%" className='offset2signin' />
              </radialGradient>
            </defs>
            <polyline className='hex-bronze' points="150,0 300,87 300,97 150,10 0,97 0,87 150,0" /> />
          <polyline className='hex-bronze' points="150,556 300,470 300,480 150,566 0,480 0,470 150,556" />
            <polygon /* className='hex-gold' */ points="150,10 300,97 300,470 150,556 0,470 0,97 150,10" fill="url(#grad2)" />
          </svg>
          </div>
          <form className='signup-box' onSubmit={this.handleSubmit}>
            <h1 className="signup-box-logo">
              Register
          </h1>
            <fieldset className='fieldset-style'>
              {/* <legend>Sign up </legend> */}
              <div role='alert'>
                {error && <p className='red'>{error}</p>}
              </div>
              <p>
                <label htmlFor="signup-userid">Username</label><br />
                <input type="text" name="user_name" id="signup-userid" />
              </p>
              <p>
                <label htmlFor="signup-email">Email</label><br />
                <input type="email" name="email" id="signup-email" />
              </p>
              <p>
                <label htmlFor="signup-password">Password</label><br />
                <input id="signup-password" name="password" type="password" />
              </p>
              <p>
                <label htmlFor="signup-password-repeat">Repeat Password</label><br />
                <input id="signup-password-repeat" name="passwordRepeat" type="password" />
              </p>
            </fieldset>
            <button className="signup-sign-up"> Sign up </button> <br />

          </form>
      </>
        );
      }
    }
