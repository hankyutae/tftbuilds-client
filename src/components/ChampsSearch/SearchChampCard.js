import React from 'react';
import ImgLink from '../../services/create-img-link-service';
import './SearchChampCard.css';
//import ChampsSearch from './ChampsSearch';

class SearchChampCard extends React.Component {
  render() {
    if (this.props.locale === 'build-page') {
      return (
        <div className="champ-short-display button-cursor" onClick={(e) => {
          e.stopPropagation();
          let champ = { ...this.props.champ };
          champ.stars = 1;
          champ.items = [];
          this.props.handleAdd(champ);
        }}>
          <div className="champ-icon-box">
            <img className={`build-champ-icon cost${this.props.champ.cost}`} src={ImgLink.createLink(this.props.champ.splash)} alt={`${this.props.champ.name} icon`} />
            <div className='search-champ-icon-box-traits-box'>
              {this.props.champ.traits.map((trait) => {
                return <div className='search-champ-icon-box-trait' key={trait}> {trait} </div>
              })}
            </div>

          </div>
          <div className="champ-name-box">
            <div className="champ-name-box-name">
              {this.props.champ.name}
            </div>

            <div className="champ-name-box-cost">
              <div className="coins-white" alt='gold coins' />
              {this.props.champ.cost}
            </div>

          </div>
        </div >
      );

    }

  }

}

export default SearchChampCard;