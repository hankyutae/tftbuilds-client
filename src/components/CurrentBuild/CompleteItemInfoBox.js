import React from 'react';
import './CompleteItemInfoBox.css';
import ImgLink from '../../services/create-img-link-service';
import ReactHtmlParser from 'react-html-parser';

class CompleteItemInfoBox extends React.Component {
  state={/* 
    isExpanded:this.props.isExpanded */
    isExpanded:true
  };
  handleExpand=()=>{
    this.setState({
      isExpanded:/* !this.state.isExpanded */true
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
    let namesToVal={};
    itemInfo.effects.forEach(effect=>{
      namesToVal[effect.name.toLowerCase()]=effect.value
    })
    let desc=this.stringFixer(itemInfo.desc);
    const problemItemDescs=[18,28,38,48,58,68,78];
    if(problemItemDescs.includes(item)){
      desc=desc.split('<br>');
      desc.shift();
      desc=desc.join('<br>');
    }
    desc=desc.split('<tftitemrules>');
    desc=desc.join('');
    desc=desc.split('</tftitemrules>');
    desc=desc.join('');

    //converting <br><br> into single <br>
    desc=desc.split('<br>').map(str=>str.trim()).join('<br>').split('<br><br>').join('<br>')

    Object.keys(namesToVal).forEach((name,index)=>{
      desc=desc.split(`@${name.toLowerCase()}@`).join(namesToVal[name]);
      desc=desc.split(`@chanceonhittodisarm@`).join(namesToVal['2426EA7E'.toLowerCase()]);      
      desc=desc.split(`@chanceonhittosilence@`).join(namesToVal['2275757B'.toLowerCase()]);      
      desc=desc.split(`@chanceonhittoshrink@`).join(namesToVal['A56E0A21'.toLowerCase()]);       
      desc=desc.split(`@stasisduration@`).join(namesToVal['C425872E'.toLowerCase()]);        
      desc=desc.split(`@chanceonhittoshrink@`).join(namesToVal['A56E0A21'.toLowerCase()]);        
      desc=desc.split(`@chanceonhittoshrink@`).join(namesToVal['A56E0A21'.toLowerCase()]);        
      desc=desc.split(`@chanceonhittoshrink@`).join(namesToVal['A56E0A21'.toLowerCase()]);                                            
    })

    return <div>{ReactHtmlParser(desc)}</div>;
    


  }

  render() {
    const itemInfo=this.props.items[this.props.item];
    return (
      <div className='flex-box-complete-item-info'>
        <div className='item-img-div' onClick={(e)=>this.props.handleRemove(this.props.itemIndex)}>
          <img className='build-item-icon button-cursor' src={ImgLink.createLink(itemInfo.icon)} alt={`${itemInfo.name} icon`} /* onClick={(e) => { this.handleExpand(); }} */ />
        </div>
        {
          /* this.state.isExpanded &&  */
          <div className='item-info-box'>
            {/* <div className='item-name'>
              {itemInfo.name}
            </div> */}
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