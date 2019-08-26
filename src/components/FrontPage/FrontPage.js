import React from 'react';
import './FrontPage.css';
import { Link } from 'react-router-dom';
/* import backgroundSplash from '../../img/backsplash.jpg' */
export default class FrontPage extends React.Component {
  render() {
    return (
      <div className='front-page-div'>
        <header className='front-page-header' role="banner">
          <h1>
            <span>TFTBuilds</span>
            <span className="header-undertext">Build comps. Win Games</span>

          </h1>
          {/* <img src={backgroundSplash} alt='background splash'/> */}
        </header>

        <section className="s1">
          <p>
            TFTBuilds allows you to build a hypothetical composition along with items before you enter the arena! Each champions' stats will update based on the synergies/items/star levels.
          </p>
          <div className='btn'>
            <Link  className='nav-link'  to='/create-build'>
              Build a comp
            </Link>
          </div>
        </section>
        <div>

        </div>

        <section className="s2">
          <p>
            Sign up to save your builds!
          </p>
          <div className='btn'>
            <Link  className='nav-link' to='/login'>
              Log in
            </Link>
          </div>
          <div className='btn'>
            <Link className='nav-link'  to='/signup'>
              Sign up
            </Link>
          </div>
        </section>
      </div>
    );
  }
}