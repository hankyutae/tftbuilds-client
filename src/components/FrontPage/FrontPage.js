import React from 'react';
import './FrontPage.css';
import { Link } from 'react-router-dom';
/* import {Link} from ; */
export default class FrontPage extends React.Component {
  render() {
    return (
      <div className='front-page-div'>
        <header role="banner">
          <h1>
            <span>TFT Comps</span>
            <span className="header-undertext">Build comps. Win Games</span>

          </h1>
        </header>

        <section className="s1">
          <p>
            TFT Comps lets you build a hypothetical composition along with items before you enter the arena! Each champions' stats will update based on the synergies/items/star levels.
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