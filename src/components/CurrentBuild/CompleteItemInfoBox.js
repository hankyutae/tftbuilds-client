import React from 'react';
import './CompleteItemInfoBox.css';
import ImgLink from '../../services/create-img-link-service'

class CompleteItemInfoBox extends React.Component {
  state={
    isExpanded:this.props.isExpanded
  };
  handleExpand=()=>{
    this.setState({
      isExpanded:!this.state.isExpanded
    })
  };
  stringFixer=(string)=>{
    const arr=[];
    let stack=[];
    for(let i=0;i<string.length;i++){
      if(string[i]==='@'){
        arr.push(string[i]);
        if(stack.length===0){
          stack.push(0);
        }
        else{
          stack.pop();
        }
      }
      else{
        if(stack.length===0){
          arr.push(string[i])
        }
        else{
          arr.push(string[i].toLowerCase())
        }
      }
    }
    return arr.join('');
  }
  parseDesc=(itemInfo,item)=>{
    let namesArr=[];
    let valuesArr=[];
    itemInfo.effects.forEach(effect=>{
      namesArr.push(effect.name);
      valuesArr.push(effect.value);
    })
    let desc=this.stringFixer(itemInfo.desc);
    const problemItemDescs=[18,28,38,48,58,68,78];
    if(problemItemDescs.includes(item)){
      desc=desc.split('<br>');
      desc.shift();
      desc=desc.join('');
    }
    namesArr.forEach((name,index)=>{
      desc=desc.split(`@${name.toLowerCase()}@`).join(valuesArr[index]);
    })

    return desc;
    


  }

  render() {
    const itemInfo=this.props.items[this.props.item];
    return (
      <div className='flex-box-complete-item-info'>
        <div className='item-img-div' >
          <img className='build-item-icon' src={ImgLink.createLink(itemInfo.icon)} alt={`${itemInfo.name} icon`} onClick={(e) => { this.handleExpand(); }} />
        </div>
        {
          this.state.isExpanded && 
          <div className='item-info-box'>
            <div className='item-name'>
              {itemInfo.name}
            </div>
            <div className='item-desc'>
              {this.parseDesc(itemInfo,this.props.item)}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default CompleteItemInfoBox;