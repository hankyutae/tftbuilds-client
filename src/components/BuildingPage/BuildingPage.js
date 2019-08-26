import React from 'react';
import CurrentBuild from '../CurrentBuild/CurrentBuild';
import ChampsSearch from '../ChampsSearch/ChampsSearch';
import './BuildingPage.css';

class BuildingPage extends React.Component {
  render() {
    return (
      <div className="create-builds-page">
        <CurrentBuild/>{/* 
        <div className='search-and-build-separator'>

        </div> */}
        <ChampsSearch locale='build-page'/>
      </div >
    );
  }

}

export default BuildingPage;
