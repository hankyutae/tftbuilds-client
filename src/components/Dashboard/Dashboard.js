import React from 'react';
import './Dashboard.css';
import TftBuildsApiService from '../../services/tftbuilds-api-service';
import DashboardABuildDisplay from './DashboardABuildDisplay';

export default class Dashboard extends React.Component {
  state = {
    allbuilds: [],
    removeABuild: (index) => {
      let oneLvlDeepCopy = [...this.state.allbuilds];
      oneLvlDeepCopy.splice(index, 1);
      this.setState({
        allbuilds: oneLvlDeepCopy
      })
    }
  }
  componentDidMount() {
    TftBuildsApiService.getBuilds()
      .then(builds => {
        this.setState({
          allbuilds: builds
        })
      });
  }
  render() {
    return (
      <div className='Dashboard h2-nav-is-above'>
        {/* <h2>Your Account</h2>
        <div className='account-stuff'>

        </div> */
          <div className='display-account-builds-box'>
            
            <h2>Your Builds</h2>
        
            {this.state.allbuilds.length !== 0 &&
              this.state.allbuilds.map((build, index) => {
                return <DashboardABuildDisplay key={index} build={build} index={index} handleRemove={this.state.removeABuild} />
              })
            }
          </div>
        }

      </div>
    )
  }
}