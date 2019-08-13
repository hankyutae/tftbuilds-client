function handleAddItem(allItems, champItems, itemId){
  const indexOfSingle = champItems.findIndex(num=>num<10);
  if(champItems.length===3 && (indexOfSingle===-1 || !(itemId<10)) ){
    return 'Too many items';
  }

  if(champItems.length===0){
    return ['add', itemId]
  }
  
  if(indexOfSingle!==-1 && itemId<10){
    let array=[itemId,champItems[indexOfSingle]].sort();
    return ['switch', Number(array[0])*10+Number(array[1]),indexOfSingle]
  }
  else{
    return ['add', itemId]
  }

  /* const lastItemId=champItems[champItems.length-1];
  if(allItems[lastItemId].from.length===0){
    let array=[itemId,lastItemId].sort();
    return ['switch', Number(array[0])*10+Number(array[1])]
  }
  else{
    return ['add', itemId]
  } */
}

export default handleAddItem;