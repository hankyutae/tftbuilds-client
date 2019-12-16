
function completeInfo(allTraits, countTraits) {
  const calcSyn = {}
  Object.keys(countTraits).forEach(trait => {
    /* for(let i=0; i<allTraits[trait];i++){} */
    let maxMinUnits = 0;
    let effectNum = -1;
    if (trait === "Ninja") {
      for (let i = 0; i < allTraits[trait].effects.length; i++) {
        if (countTraits[trait] === allTraits[trait].effects[i].minUnits) {
          effectNum = i;
        }
      }
    }
    else {
      allTraits[trait].effects.forEach((effect, index) => {
        if (countTraits[trait] >= effect.minUnits && effect.minUnits > maxMinUnits) {
          effectNum = index;
          maxMinUnits = effect.minUnits;
        }
      })
    }

    calcSyn[trait] = {
      ...allTraits[trait],
      count: countTraits[trait],
      effectNum
    }
  })

  return calcSyn;
}

function countSynergyFromAnItem(accTraitsFromItems, itemNum) {
  if (itemNum % 10 === 8 || itemNum===89) {
    let num = (itemNum!==89)? Math.floor(itemNum / 10) % 10 : 9;
    let trait;
    if (num === 1) {
      trait = 'Assassin';
    }
    else if (num === 2) {
      trait = 'Blademaster';
    }
    else if (num === 3) {
      trait = 'Inferno';
    }
    else if (num === 4) {
      trait = 'Mage';
    }
    else if (num === 5) {
      trait = 'Warden';
    }
    else if (num === 6) {
      trait = 'Light';
    }
    else if (num === 7) {
      trait = 'Glacial';
    }
    else if (num === 9) {
      trait= 'Berserker';
    }
    else {

      return;
    }
    //Multiple of the Same Synergy adding Item doesn't work -- learned this the hard way
    if (!accTraitsFromItems.includes(trait)) {
      accTraitsFromItems.push(trait);
    }
  }
}


const CalcService = {
  calcSyn: (allTraits, allChamps, currentBuild) => {
    const checkedChamps = [];
    const countTraits = {};
    let hasBeenLux = false;
    currentBuild.forEach(champInfo => {
      //What I've seen from various bugs is that a single chess 
      //piece can only give at most one of every trait.
      let accTraits = [];
      champInfo.items.forEach(item => {
        countSynergyFromAnItem(accTraits, item);
      })

      let champ=allChamps[champInfo.id];
      //Multiple of same champ doesn't count towards synergy
      if (!checkedChamps.includes(champ.name)) {
        champ.traits.forEach(trait => {
          if (!accTraits.includes(trait)) {
            accTraits.push(trait);
          }
        });
        checkedChamps.push(champ.name)
      }

      accTraits.forEach(trait => {

        //Deal with multiple luxes I know not possible in game, but don't want to implement a restricting system yet.
        let inc=1;
        if(trait!='Avatar' && champ.name==='Lux' && allChamps[champInfo.id].traits.includes(trait) && !hasBeenLux){
          inc=2;
          hasBeenLux=true;
        }
        if (!countTraits[trait])
          countTraits[trait] = inc;
        else
          countTraits[trait]+=inc;
      })
    });

    const calcSyn = completeInfo(allTraits, countTraits)
    return calcSyn;
  },

  appliedSyn: (allTraits, countTraits) => {

    allTraits.forEach(trait => {

    })
  }
}

export default CalcService;
export {countSynergyFromAnItem};