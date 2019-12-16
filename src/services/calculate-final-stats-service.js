import { countSynergyFromAnItem } from './calculate-synergy-service';



const ruleOfThumb={
  'critChance':'add',
  'initialMana':'add',
  'hp':'add',
  'attackSpeed':'mult',
  'armor':'add',
  'magicResist':'add',
  'ap':'mult',
  'critMultiplier':'add',
  'dodgeChance':'add',
  'damage':'add'

}


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
  //Assassin,Imperial(?),Brawler, Ninja
  if (syn["Assassin"] !== undefined && syn["Assassin"].effectNum >= 0) {
    if (deepCopy.traits.includes("Assassin") || checkIfItemsGiveSynergy(deepCopy.items,"Assassin")) {
      stats.critMultiplier.add += syn["Assassin"].effects[syn["Assassin"].effectNum]["vars"][0]["value"];
      stats.critChance.add+= syn["Assassin"].effects[syn["Assassin"].effectNum]["vars"][1]["value"];
    }
  }

  if (syn["Yordle"] !== undefined && syn["Yordle"].effectNum >= 0) {
    if (deepCopy.traits.includes("Yordle") || checkIfItemsGiveSynergy(deepCopy.items,"Yordle")) {
      stats.dodgeChance.add+= syn["Yordle"].effects[syn["Yordle"].effectNum]["vars"][0]["value"];
    }
  }

  if (syn["Imperial"] !== undefined && syn["Imperial"].effectNum === 1) {
    if (deepCopy.traits.includes("Imperial") || checkIfItemsGiveSynergy(deepCopy.items,"Imperial")) {
      stats.imperial = 2;
    }
  }

  if (syn["Brawler"] !== undefined && syn["Brawler"].effectNum >= 0) {
    if (deepCopy.traits.includes("Brawler") || checkIfItemsGiveSynergy(deepCopy.items,"Brawler")) {
      stats.hp.add+=syn['Brawler'].effects[syn['Brawler'].effectNum]['vars'][0]['value'];
    }
  }

  if (syn["Ninja"] !== undefined && syn["Ninja"].effectNum >= 0) {
    if (deepCopy.traits.includes("Ninja") || checkIfItemsGiveSynergy(deepCopy.items,"Ninja")) {
      stats.damage.add+=syn['Ninja'].effects[syn['Ninja'].effectNum]['vars'][0]['value'];
      stats.ap.mult+=syn['Ninja'].effects[syn['Ninja'].effectNum]['vars'][1]['value'];
    }
  }




  //Syns to keep a lookout for:
  //Robot - once initial mana is fixed
  //Wild - To add potential
  //
}


function handleItem(id, stats, allItems) {

  itemNumberToStatV2(allItems[id],stats);

  //RapidFireCannon
  //stacks tested ingame in patch 9.14
  if (id === 22) {
    stats.range.mult *= 2;
  }

  //Rabadon's Deathcap
  //stacks seen ingame in patch 9.14
  if (id === 33) {
    stats.ap.multmult += allItems[id].effects['APPercentAmp'];
  }
  
}

function itemNumberToStatV2(item,stats){
  let conversion={
    'CritChance':'critChance',
    'DodgeChance':'dodgeChance',
    'Health':'hp',
    'MagicResist':'magicResist',
    'extraMR':'magicResist',
    'Armor':'armor',
    'Mana':'initialMana',
    'AP':'ap',
    'AS':'attackSpeed',
    'AttackSpeed':'attackSpeed',
    'AD':'damage',
    'CriticalStrikeAmp':'critMultiplier',
  }
  Object.keys(item.effects).forEach((effectName)=>{
    let affectedStat=conversion[effectName];
    if(affectedStat){
      stats[affectedStat][ruleOfThumb[affectedStat]]+=item.effects[effectName];
    }
  })
}

function itemNumberToStat(num, stats, allItems) {
  if (num === 1) {
    stats.damage.add += allItems[num].effects[0]['AD'];
  }
  else if (num === 2) {
    stats.attackSpeed.mult += allItems[num].effects[0]['AS'];
  }
  else if (num === 3) {
    stats.ap.mult += allItems[num].effects[0].value;
  }
  else if (num === 4) {
    stats.initialMana.add += allItems[num].effects[0].value;
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
    stats.critChance.add+=allItems[num].effects[0].value;
    stats.dodgeChance.add+=allItems[num].effects[1].value;
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


//deepCopy requires the keys items, name, traits
function calcStats(deepCopy, syn, allItems) {
  //let deepCopy = JSON.parse(JSON.stringify(champ));
  //hp,mana,initialmana,damage,as,range,critchance,critdamage,armor,mr

  let statsToWatch = {
    damageHealthScale: [1, 1.8, 3.6],
    hp: { add: 0, mult: 100 },
    mana: { add: 0, mult: 100 },
    initialMana: { add: 0, mult: 100 },
    damage: { add: 0, mult: 100 },
    attackSpeed: { add: 0, mult: 100 },
    armor: { add: 0, mult: 100 },
    magicResist: { add: 0, mult: 100 },
    range: { add: 0, mult: 100 },
    ap: { add: 0, mult: 100, multmult:100 },
    critChance: { add: 0, mult: 100 },
    critMultiplier: { add: 0, mult: 100 },
    dodgeChance:{ add: 0, mult: 100 },
    ultDescAffectedByAp: [],
  }
  
  handleItems(statsToWatch, deepCopy.items, allItems)
  handleSyn(statsToWatch, deepCopy, syn);
  /* handleUlt(statsToWatch, deepCopy); */
  //final scaling some stat values
  statsToWatch.ap.mult=100+(statsToWatch.ap.mult-100)*(statsToWatch.ap.multmult/100)
  statsToWatch.critMultiplier.add /= 100;
  statsToWatch.critChance.add /= 100;
  statsToWatch.dodgeChance.add /= 100;
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