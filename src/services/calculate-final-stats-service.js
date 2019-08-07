import { countSynergyFromAnItem } from './calculate-synergy-service';

function checkIfItemsGiveSynergy(items, synergy) {
  let hasSynergyFromItem = false;
  items.forEach(item => {
    let countTrait = [];
    countSynergyFromAnItem(countTrait, item);
    if (countTrait.includes(synergy)) {
      hasSynergyFromItem = true;
    }
  })
  return hasSynergyFromItem;
}

function handleSyn(stats, deepCopy, syn) {
  //Global Syns that change passive stats
  //Noble, Sorcerer
  if (syn["Noble"] !== undefined
    && syn["Noble"].effectNum === (syn["Noble"].effects.length - 1)) {
    stats.armor.add += syn["Noble"].effects[syn["Noble"].effects.length - 1]["vars"].find(variable => variable["name"] === "Armor"
    )["value"];
    stats.magicResist.add += syn["Noble"].effects[syn["Noble"].effects.length - 1]["vars"].find(variable => variable["name"] === "MagicResist"
    )["value"];
  }
  if (syn["Sorcerer"] !== undefined && syn["Sorcerer"].effectNum >= 0) {
    stats.ap.mult += syn["Sorcerer"].effects[syn["Sorcerer"].effectNum]["vars"][0]["value"];
  }

  //Local Syns that change passive stats
  //Assassin,Imperial(?)
  if (syn["Assassin"] !== undefined && syn["Assassin"].effectNum >= 0) {
    if (deepCopy.traits.includes("Assassin") || checkIfItemsGiveSynergy(deepCopy.items,"Assassin")) {
      console.log(syn["Assassin"].effects[syn["Assassin"].effectNum]["vars"]["value"]);
      stats.critMultiplier.add += syn["Assassin"].effects[syn["Assassin"].effectNum]["vars"][0]["value"];
    }

  }

  if (syn["Imperial"] !== undefined && syn["Imperial"].effectNum === 1) {
    if (deepCopy.traits.includes("Imperial") || checkIfItemsGiveSynergy(deepCopy.items,"Imperial")) {
      stats.imperial = 2;
    }
  }

  //Syns to keep a lookout for:
  //Robot - once initial mana is fixed
  //Wild - To add potential
  //
}


function handleItem(id, stats, allItems) {
  let ones = id % 10;
  let tens = Math.floor(id / 10) % 10;
  if (ones === 8) {
    //Synergy buffs get handled by syn
    //Spatula doubles the effect of the other item
    itemNumberToStat(tens, stats, allItems)
    itemNumberToStat(tens, stats, allItems)
  }
  else {
    itemNumberToStat(ones, stats, allItems)
    itemNumberToStat(tens, stats, allItems)
  }

  //Handle Item with bonuses to passive stats
  //Currently assumes all of them stack might have to add exceptions
  if (tens !== 0) {
    //IE
    //Probably stacks, haven't checked though.
    if (id === 11) {
      stats.critMultiplier.add += allItems[id].effects[0].value;
    }

    //Zeke's Herald
    //stacks tested 9.14
    if (id === 17) {
      stats.attackSpeed.mult += allItems[id].effects[0].value;
    }

    //RapidFireCannon
    //stacks tested ingame in patch 9.14
    if (id === 22) {
      stats.range.mult *= 2;
    }

    //Rabadon's Deathcap
    //stacks seen ingame in patch 9.14
    if (id === 33) {
      stats.ap.mult += allItems[id].effects[0].value;
    }

  }



}

function itemNumberToStat(num, stats, allItems) {
  if (num === 1) {
    stats.damage.add += allItems[num].effects[0].value;
  }
  else if (num === 2) {
    stats.attackSpeed.mult += allItems[num].effects[0].value;
  }
  else if (num === 3) {
    stats.ap.mult += allItems[num].effects[0].value;
  }
  else if (num === 4) {
    stats.initalMana.add += allItems[num].effects[0].value;
  }
  else if (num === 5) {
    stats.armor.add += allItems[num].effects[0].value;
  }
  else if (num === 6) {
    stats.magicResist.add += allItems[num].effects[0].value;
  }
  else if (num === 7) {
    stats.hp.add += allItems[num].effects[0].value;
  }
  else if (num === 8) {
    return;
  }
  else if (num === 9) {
    return;
  }
  else {
    return;
  }

}

function handleItems(stats, citems, allItems) {
  citems.forEach(item => {
    handleItem(item, stats, allItems)
  })
}


function ultDamageEdgeCases(deepCopy,ultPropKey,stats){
  if(ultPropKey==="PercentDamageIncreasePerStack"&& deepCopy.name==='Tristana'){
    return true;
  }
}

function ultHealEdgeCases(deepCopy,ultPropKey,stats){
  
}

function handleUlt(stats, deepCopy) {
  const exceptions=['Volibear','Draven','Rengar','Graves','Braum','Elise','Kayle','Kindred','Shen']
  if(exceptions.includes(deepCopy.name)){
    return;
  }
  deepCopy.ability.variables.forEach(ultProp=>{
    if (ultProp["key"].toLowerCase().includes('damage')){
      if(ultDamageEdgeCases(deepCopy,ultProp["key"]))
        return;
      stats.ultDescAffectedByAp.push(ultProp["key"]);
      return;
    }
    if (ultProp["key"].toLowerCase().includes('heal')){
      if(ultHealEdgeCases(deepCopy,ultProp["key"]))
        return;
      stats.ultDescAffectedByAp.push(ultProp["key"]);
      return;
    }
    if (ultProp["key"].toLowerCase()==='manasteal'){
      stats.ultDescAffectedByAp.push(ultProp["key"]);
      return;
    }
  })

}


function calcStats(deepCopy, syn, allItems) {
  //let deepCopy = JSON.parse(JSON.stringify(champ));
  //hp,mana,initialmana,damage,as,range,critchance,critdamage,armor,mr

  let statsToWatch = {
    damageHealthScale: [1, 1.8, 3.6],
    hp: { add: 0, mult: 100 },
    mana: { add: 0, mult: 100 },
    initalMana: { add: 0, mult: 100 },
    damage: { add: 0, mult: 100 },
    attackSpeed: { add: 0, mult: 100 },
    armor: { add: 0, mult: 100 },
    magicResist: { add: 0, mult: 100 },
    range: { add: 0, mult: 100 },
    ap: { add: 0, mult: 100 },
    critChance: { add: 0, mult: 100 },
    critMultiplier: { add: 0, mult: 100 },
    ultDescAffectedByAp: [],
  }
  if (deepCopy.traits.includes("Imperial")) {
    statsToWatch.imperial = 1;
  }
  handleItems(statsToWatch, deepCopy.items, allItems)
  handleSyn(statsToWatch, deepCopy, syn);
  handleUlt(statsToWatch, deepCopy);
  //final scaling some stat values
  statsToWatch.critMultiplier.add /= 100;
  statsToWatch.attackSpeed.add /= 100;
  for (let [key, value] of Object.entries(statsToWatch)) {
    if (typeof value !== "object" || Array.isArray(value)) {
      continue;
    }
    statsToWatch[key].mult *= 0.01;
  }
  return statsToWatch;
}



export default calcStats;