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
            <span>TFT Builds</span>
            <span className="header-undertext">Build comps. Win Games</span>

          </h1>
          {/* <img src={backgroundSplash} alt='background splash'/> */}
        </header>

        <section className="s1">
          <p>
            TFT Builds allows you to build a hypothetical composition along with items before you enter the arena! Each champions' stats will update based on the synergies/items/star levels.
          </p>
          <button>
            <Link  className='nav-link'  to='/create-build'>
              Build a comp
            </Link>
          </button>
        </section>

        <section className="s2">
          <p>
            Sign up to save your builds!
          </p>
          <button style={{marginRight:'5px'}}>
            <Link  className='nav-link' to='/login'>
              Log in
            </Link>
          </button>
          <button>
            <Link className='nav-link'  to='/signup'>
              Sign up
            </Link>
          </button>
        </section>
      </div>
    );
  }
}