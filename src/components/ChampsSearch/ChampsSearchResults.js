import React from 'react';
import SearchChampCard from './SearchChampCard';
import './ChampsSearchResults.css'

class ChampsSearchResults extends React.Component {
  render() {
    return (
      <div className="champs-search-results">
        {this.props.champs &&
          Object.values(this.props.champs).map((champ,index)=>{
            return <SearchChampCard key={index} champ={champ} handleAdd={this.props.handleAdd} locale={this.props.locale}/>
          })
        }
      </div >
    );
  }

}

export default ChampsSearchResults;
