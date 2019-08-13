import React from 'react';
import ChampCard from './ChampCard';
import './BuildChampions.css'
import TokenService from '../../services/token-service'
import {Link} from 'react-router-dom';

class BuildChampions extends React.Component {
  render() {
    return (
      <div className="build-display-champions">
        <h3 className='champion-header'>
          Champions{/* 
          <div className='headertwo-undertext'> */}
            <button className='current-build-page-new-build' onClick={this.props.newBuild}>
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
            }
            
            { /* 
            </div> */}
        </h3>
        <div className='build-display-champion-cards-box'>
          {this.props.champs.map((champInfo,index)=>
            <ChampCard key={index} index={index} champ={this.props.allChamps[champInfo.id]} syn={this.props.syn}/>
          )}


        </div>
      </div >
    );
  }

}

export default BuildChampions;