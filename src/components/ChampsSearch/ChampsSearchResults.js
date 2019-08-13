import React from 'react';
import SearchChampCard from './SearchChampCard';
import './ChampsSearchResults.css'

class ChampsSearchResults extends React.Component {
  autoSortByPrice=()=>{
    let arr=Object.values(this.props.champs)
    arr=arr.sort((a,b)=>a.cost-b.cost);
    return arr;
  }
  render() {

    return (
      <div className="champs-search-results">
        {this.props.champs &&
          this.autoSortByPrice().map((champ,index)=>{
            return <SearchChampCard key={index} champ={champ} handleAdd={this.props.handleAdd} locale={this.props.locale}/>
          })
        }
      </div >
    );
  }

}

export default ChampsSearchResults;
