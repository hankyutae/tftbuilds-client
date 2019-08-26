import React from 'react';
import TftContext from '../../contexts/TftContext';
import calcStats from '../../services/calculate-final-stats-service';
import ImgLink from '../../services/create-img-link-service';
import './ChampCard.css';
import handleAddItem from '../../services/handle-add-item-service';
import ValidationError from '../ValidationError/ValidationError';
import SingleStat from './SingleStat';
import ChampCardUltimate from './ChampCardUltimate';
import CompleteItemInfoBox from './CompleteItemInfoBox';

class ChampCard extends React.Component {
  /* state = {
    isEditting: false,
    selectedItem: 1
  } */
  /* handleEditClick = () => {
    this.setState({
      isEditting: !this.state.isEditting
    })
  } */
  static contextType = TftContext

  handleStarsChange = (stars) => {
    this.context.changeStarsOnChamp(this.props.index, stars);
  }
  raiseStarsOnChamp = (e) => {
    e.stopPropagation();
    this.context.raiseStarsOnChamp(this.props.index);
  }
  lowerStarsOnChamp = (e) => {
    e.stopPropagation();
    this.context.lowerStarsOnChamp(this.props.index);
  }
  handleItemSelectionChange = (e) => {
    this.setState({
      selectedItem: Number(e.target.value),
    })
  }
  handleAddItemSubmit = (item) => {
    let res = handleAddItem(this.context.items, this.context.currentBuild[this.props.index].items, item);
    if (res === 'Too many items') {
      return;
    }
    else if (res[0] === 'switch') {
      this.context.switchItemOnChamp(this.props.index, res[1], res[2]);
    }
    else if (res[0] === 'add') {
      this.context.addItemToChamp(this.props.index, res[1]);
    }

  }
  handleRemoveItem = (itemIndex) => {
    this.context.removeItemFromChamp(this.props.index, Number(itemIndex));
  }

  // returns Array of <span> with stars of the right color.
  generateStars = (stars) => {
    let starColor = this.context.arrayOfStars[stars - 1];
    let starGen = [];
    for (let i = 0; i < stars; i++) {
      starGen.push(<span key={i} className={`fa fa-star ${starColor}`} ></span>);
    }
    return starGen
  }
  validateAddItem = () => {
    if (handleAddItem(this.context.items, this.context.currentBuild[this.props.index].items, 11) === 'Too many items') {
      return 'Potentially too many items, may remove items by clicking on the item icons below'
    }
  }
  createItemSelection = () => {
    /* let array=[];
    for(let i=0;i<this.context.numOfBasicItems;i++){
      array.push(<option key={i} value={`${i+1}`}> {this.context.items[i+1].name}</option>);
    } */
    let arr = [];
    for (let i = 1; i <= this.context.numOfBasicItems; i++) {

      arr.push(<img key={i} className='build-item-icon' src={ImgLink.createLink(this.context.items[i].icon)} alt={`${this.context.items[i].name} icon`} onClick={(e) => { e.stopPropagation(); this.handleAddItemSubmit(i); }} />)

    }
    for (let i = 1; i <= this.context.numOfBasicItems; i++) {
      for (let j = i; j <= this.context.numOfBasicItems; j++) {
        arr.push(<img key={i * 10 + j} className='build-item-icon' src={ImgLink.createLink(this.context.items[i * 10 + j].icon)} alt={`${this.context.items[i * 10 + j].name} icon`} onClick={(e) => { e.stopPropagation(); this.handleAddItemSubmit(i * 10 + j); }} />)
      }

    }
    return arr;
  }
  createItemSelectionGrid = () => {
    const completeGrid = [];
    const firstRow = [<td key={0}></td>];
    for (let i = 1; i <= this.context.numOfBasicItems; i++) {
      firstRow.push(<td key={i}><img className='grid-build-item-icon button-cursor' src={ImgLink.createLink(this.context.items[i].icon)} alt={`${this.context.items[i].name} icon`} onClick={(e) => { e.stopPropagation(); this.handleAddItemSubmit(i); }} /> </td>)

    }
    completeGrid.push(
      <tr key={0}>
        {firstRow}
      </tr>
    );

    for (let i = 1; i <= this.context.numOfBasicItems; i++) {
      let row = [];
      row.push(<td key={i}><img className='grid-build-item-icon button-cursor' src={ImgLink.createLink(this.context.items[i].icon)} alt={`${this.context.items[i].name} icon`} onClick={(e) => { e.stopPropagation(); this.handleAddItemSubmit(i); }} /> </td>);
      for (let j = 1; j <= this.context.numOfBasicItems; j++) {
        let index = (i < j) ? i * 10 + j : j * 10 + i;
        row.push(<td key={index}><img className='grid-build-item-icon button-cursor' src={ImgLink.createLink(this.context.items[index].icon)} alt={`${this.context.items[index].name} icon`} onClick={(e) => { e.stopPropagation(); this.handleAddItemSubmit(index); }} /> </td>);
      }
      completeGrid.push(
        <tr key={i}>
          {row}
        </tr>
      );
    }
    return completeGrid;


  }
  createStarsSelection = () => {
    let arr = [];
    this.context.arrayOfStars.forEach((star, index) => {
      arr.push(
        <div key={index} className="selecting-stars" onClick={(e) => {
          this.handleStarsChange(index + 1);
        }}>
          {this.generateStars(index + 1)}
        </div>
      )

    })
    return arr;
  }

  createStatTags = () => {
    return [
      "hp",
      "mana",
      "initalMana",
      "damage",
      "attackSpeed",
      "range",
      "critMultiplier",
      "critChance",
      "armor",
      "magicResist"
    ]
  }

  getStatToText = (statType) => {
    let table = {
      hp: "HP",
      mana: "Mana",
      damage: 'Damage',
      initalMana: "Init. Mana",
      magicResist: "MR",
      critChance: "Crit. Chance",
      critMultiplier: "Crit. Mult.",
      attackSpeed: "AS",
      range: "Range",
      armor: 'Armor',
    }
    return table[statType];
  }

  handleRemoveChamp = () => {
    this.context.removeChampFromCurrentBuild(this.props.index);
  }

  render() {
    const currentChamp = this.context.currentBuild[this.props.index];
    const currentChampInfo = this.context.champions[currentChamp.id]
    let statMod = calcStats({ ...currentChamp, ...currentChampInfo }, this.props.syn, this.context.items);

    return (
      <div className='build-display-champion-card'>

        <div className='champion-simple-flex'>
          {(this.props.screenSize!==2) &&
            <div className="edit-notice button-cursor button-hover-darken" onClick={() => this.context.toggleUltOnCurrentBuild(this.props.index)}>
              <strong>{currentChamp.isUltExpanded ? 'Hide Ult' : 'Show Ult'}</strong>
           </div>
          }
          <div className='b1'>
            <div className={`build-champ-icon-box `}>
              <img className={`build-champ-icon cost${currentChampInfo.cost}`} src={ImgLink.createLink(currentChampInfo.splash)} alt={currentChampInfo.name + ' icon'} />
              <div className={`build-champ-icon-box-price${currentChampInfo.cost}`}>
                {currentChampInfo.cost}
              </div>
            </div>
            <p>
              {currentChampInfo.name}
            </p>
          </div>
          <div className='b2'>
            {currentChampInfo.traits.map((trait, index) =>
              <p key={index}>{trait}</p>
            )}
          </div>
          <div className='b3'>
            <i className="fa fa-chevron-up button-cursor increase-fontsize-on-hover" aria-hidden="true" onClick={this.raiseStarsOnChamp}></i>
            <div className="champ-stars">
              {this.generateStars(currentChamp.stars)}
            </div>

            <span className="fa fa-chevron-down button-cursor increase-fontsize-on-hover" aria-hidden="true" onClick={this.lowerStarsOnChamp}></span>
          </div>
          <div className='b4'>
            <div className='button-cursor build-buttons button-hover-darken add-items-button' onClick={(e) => { e.stopPropagation(); this.context.toggleAddItemOnCurrentBuild(this.props.index) }}>
              {currentChamp.isAddItemExpanded ? "Hide Items" : "Add Items"}
            </div>
            <div className='build-items-box'>
              {
                currentChamp.items.map((item, index) => (
                  <div key={index} className='item-img-div' >
                    <img className='build-item-icon button-cursor' src={ImgLink.createLink(this.context.items[item].icon)} alt={`${this.context.items[item].name} icon`} onClick={(e) => { e.stopPropagation(); this.handleRemoveItem(index); }} />
                  </div>
                )
                )
              }
            </div>

            {this.props.screenSize===0 &&
              <div className='button-cursor build-buttons button-hover-darken' onClick={(e) => { e.stopPropagation(); this.context.toggleStatsOnCurrentBuild(this.props.index) }}>
                {currentChamp.isStatsExpanded ? 'Hide Stats' : 'Show Stats'}
              </div>
              /* :
              <div className='button-cursor' onClick={(e) => { e.stopPropagation(); this.context.toggleUltOnCurrentBuild(this.props.index) }}>Show Ult Stats</div> */
            }

          </div>

          {!(this.props.screenSize===0) &&
            <div className='build-stats-table-div'>
              <table className="build-stats-table">
                <tbody>
                  <tr>
                    {
                      this.createStatTags().map((statType,index) => {
                        return (
                          <td key={index} className={`table-stat-type ${statType}`}>
                            {this.getStatToText(statType)}
                          </td>
                        );
                      })
                    }
                  </tr>
                  <tr>
                    {
                      this.createStatTags().map((statType) => {
                        return <SingleStat key={statType} champ={currentChamp} champInfo={currentChampInfo} statMod={statMod} statType={statType} />
                      })
                    }
                  </tr>
                </tbody>
              </table>
            </div>
          }

          {(this.props.screenSize===2) &&
            <ChampCardUltimate champ={currentChamp} champInfo={currentChampInfo} statMod={statMod} />
          }

          <div className='b5-remove button-cursor button-hover-darken' onClick={(e) => {
            e.stopPropagation();
            this.context.removeChampFromCurrentBuild(this.props.index);
          }}>
            {/* <div>R</div>
            <div>E</div>
            <div>M</div>
            <div>O</div>
            <div>V</div>
            <div>E</div> */}
            <div>E</div>
            <div>R</div>
            <div>A</div>
            <div>S</div>
            <div>E</div>
          </div>
        </div>
        <div className="build-display-card-expansion">
          {this.props.screenSize===0 && currentChamp.isStatsExpanded &&
            <div className='build-stats-table-div'>
              <table className="build-stats-table">
                <tbody>
                  <tr>
                    {
                      this.createStatTags().map((statType,index) => {
                        return (
                          <td key={index} className={`table-stat-type ${statType}`}>
                            {this.getStatToText(statType)}
                          </td>
                        );
                      })
                    }
                  </tr>
                  <tr>
                    {
                      this.createStatTags().map((statType) => {
                        return <SingleStat key={statType} champ={currentChamp} champInfo={currentChampInfo} statMod={statMod} statType={statType} />
                      })
                    }
                  </tr>
                </tbody>
              </table>
            </div>

          }
          {(this.props.screenSize!==2) && currentChamp.isUltExpanded &&
            <ChampCardUltimate champ={currentChamp} champInfo={currentChampInfo} statMod={statMod} />
          }
            
          

          {/* <section className='build-display-change-stars'>
              <div>Choose Stars:</div>
              <div className='selecting-stars-box'>
                {this.createStarsSelection()}
              </div>
            </section> */}

          {


          }
          {currentChamp.isAddItemExpanded &&
            <div>
              <section className='build-display-add-items'>
                <div>Click on icon to add:  </div>
                <div className='build-display-item-grid-box'>
                  <table className='build-display-item-grid'>
                    <tbody>
                      {this.createItemSelectionGrid()}
                    </tbody>
                  </table>
                </div>
                <ValidationError message={this.validateAddItem()} />
              </section>
              {currentChamp.items.length !== 0 &&
                <section className='build-display-expanded-show-items'>
                  {currentChamp.items.map((item, index) => {
                    return <CompleteItemInfoBox key={index} items={this.context.items} item={item} isExpanded={true} itemIndex={index} handleRemove={this.handleRemoveItem} />
                  })}
                </section>
              }

            </div>}
        </div>



      </div>
    );
  }

}

export default ChampCard;