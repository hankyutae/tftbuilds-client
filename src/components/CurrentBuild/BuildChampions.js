import React from 'react';
import ChampCard from './ChampCard';
import './BuildChampions.css'

class BuildChampions extends React.Component {
  render() {
    return (
      <div className="build-display-champions">
        <h3 className='champion-header'>Champions</h3>
        <div className='build-display-champion-cards-box'>
          {this.props.champs.map((champ,index)=>
            <ChampCard key={index} index={index} champ={champ} syn={this.props.syn}/>
          )}


        </div>
      </div >
    );
  }

}

export default BuildChampions;