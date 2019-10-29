import React from 'react';
import './BuildChampions.css'
import ChampCard from './ChampCard';
//import TokenService from '../../services/token-service'
//import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

class BuildChampions extends React.Component {
  constructor() {
    super();
    this.state = { screenSize: 0 };
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
  }

  resize() {
    let currentscreenSize = (window.innerWidth >= 760) ? (window.innerWidth >= 1400) ? 2 : 1 : 0;
    if (currentscreenSize !== this.state.screenSize) {
      this.setState({ screenSize: currentscreenSize });
    }
  }


  render() {
    return (
      <div className="build-display-champions">
        <h3 className='champion-header'>
          Champions
          {/* 
          <div className='headertwo-undertext'> */}
          {/* <button className='current-build-page-new-build' onClick={this.props.newBuild}>
              New Build
            </button>
            {TokenService.hasAuthToken() ?
              <button className='current-build-page-save-build' onClick={this.props.saveBuild}>Save Build</button>
              :
              <button className='current-build-page-save-build'>
                <Link className='nav-link' to='/login'>
                  Log in To Save!
                </Link>
              </button>
            } */}

          { /* 
            </div> */}

        </h3>
        <button className='current-build-page-new-build button-cursor' onClick={this.props.newBuild}>
          Clear
        </button>
        {(!this.props.champs || this.props.champs.length===0) &&
          <div className='building-notice'>
            Begin by adding champions from below <br/> "<span style={{color:'#ffffff'}}>Add a Champion</span>" <br/> by clicking on the champ icon, or the card.<br></br>
            <span style={{color:'#ffffff'}}>Note!</span> There are 2 views to choose from when adding champions.
          </div>


        }
        <div className='build-display-champion-cards-box'>
          {
            this.props.champs &&
            this.props.champs.map((champInfo, index) =>
            <ChampCard key={index} index={index} champ={this.props.allChamps[champInfo.id]} syn={this.props.syn} screenSize={this.state.screenSize} />
          )}


        </div>
        {TokenService.hasAuthToken() ?
          <button className='current-build-page-save-build button-cursor' onClick={this.props.saveBuild}>Save Build</button>
          :
            <Link className='nav-link current-build-page-save-build button-cursor' to='/login'>
              Log in To Save!
            </Link>
        }
      </div >
    );
  }

}

export default BuildChampions;