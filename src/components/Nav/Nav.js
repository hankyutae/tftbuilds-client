import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css';

export default class Nav extends React.Component {
  state = {
    signal: this.props.signal
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({
      signal: !this.state.signal
    })
  }
  renderLogoutLink() {
    return (
      <>
        {
          this.getNavLink('Account', '/dash', ['nav-link'])
        }
        <Link className='nav-link inactive-nav-link'
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
        {
          this.getNavLink('Login', '/login', ['nav-link'])
        }

        {
          this.getNavLink('Register', '/signup', ['nav-link'])
        }
      </>
    )
  }
  getNavLink = (name, link, classNames) => {
    if (this.props.location.pathname === link) {
      classNames.push('active-nav-link')
    }
    else{
      classNames.push('inactive-nav-link')
    }
    return (
      <Link className={classNames.join(' ')} to={link}>
        {name}
      </Link>
    )
  }
  render() {
    return (
      <nav role="navigation">
        {
          this.getNavLink('TFTBuilds', '/', ['nav-link', 'home-link'])
        }

        <div className="nav-links">
          {
            TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()
          }
          {
            this.getNavLink('Your Build', '/create-build', ['nav-link','rightmost-nav-link'])
          }
        </div>
      </nav>
    );
  }
}