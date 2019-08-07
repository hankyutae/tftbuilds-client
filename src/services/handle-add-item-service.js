function handleAddItem(allItems, champItems, itemId){
  if(champItems.length===3 && allItems[champItems[2]].from.length>0){
    return 'Too many items';
  }

  if(champItems.length===0){
    return ['add', itemId]
  }
  const lastItemId=champItems[champItems.length-1];
  if(allItems[lastItemId].from.length===0){
    let array=[itemId,lastItemId].sort();
    return ['switch', Number(array[0])*10+Number(array[1])]
  }
  else{
    return ['add', itemId]
  }
}

export default handleAddItem;