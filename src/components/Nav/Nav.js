import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css';
import TftContext from '../../contexts/TftContext';

export default class Nav extends React.Component {
  state = {
    signal: this.props.signal
  }
  static contextType = TftContext
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({
      signal: !this.state.signal
    })
  }
  renderLogoutLink() {
    return (
      <>
        <Link className='nav-link' 
          to='/dash'>
          Account
        </Link>
        <Link className='nav-link' 
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </>
    )
  }
  renderLoginLink() {
    return (
      <> 
        <Link  className='nav-link' 
          to='/login'>
          Log in
        </Link>
        <Link className='nav-link' 
          to='/signup'>
          Register
        </Link>
      </>
    )
  }
  render() {
    return (
      <nav role="navigation">
        <Link className='nav-link home-link' to='/'>
          Home
      </Link>
        <div className="nav-links">
          {
            TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()
          }
          <Link className='nav-link' to='/create-build'>
            Your Build
        </Link>
        </div>
      </nav>
    );
  }
}