const getBaseStat=(champInfo,statMod,statType,stars)=>{
  if(statType==='ap'){
    return;
  }
  let baseStat=champInfo["stats"][statType];
  if(statType==="hp" || statType==="damage"){
    baseStat*=statMod["damageHealthScale"][stars-1];
  }
  if(statType==="dodgeChance"){
    baseStat=0;
  }
  return baseStat;
}
const roundToNDecimalPlaces=(num,n)=>{
  const scale=Math.pow(10,n);
  return Math.round(num*scale)/scale;
}

const getFinalStat = (champInfo,statMod,statType,stars) =>{
  const baseStat=getBaseStat(champInfo,statMod,statType,stars);
  const statModifiers=statMod[statType];
  let finalStat=(baseStat+statModifiers.add)*statModifiers.mult;
  return roundToNDecimalPlaces(finalStat,2);
}


export {getBaseStat,getFinalStat,roundToNDecimalPlaces}
