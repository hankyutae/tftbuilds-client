let items = {
  "-100": {
    "name": "Repeating Crossbow",
    "desc": "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@AttackSpeedPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>This effect can stack any number of times.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SwordOfTheDivine.TFT.png",
    "from": [
      -100,
      -100
    ],
    "effects": [
      {
        "name": "ChanceToProc",
        "value": 7.0
      },
      {
        "name": "98AC43CE",
        "value": 50.0
      }
    ]
  },
  "-1": {
    "name": "Hextech Chestguard",
    "desc": "Wearer is also a Hextech",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HextechChestguard.TFT.png",
    "from": [
      -1,
      -1
    ],
    "effects": []
  },
  "1": {
    "name": "B. F. Sword",
    "desc": " +@AD@ Attack Damage",
    "icon": "ASSETS/Maps/Particles/TFT/Icon_BFSword.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "AD",
        "value": 15.0
      }
    ]
  },
  "2": {
    "name": "Recurve Bow",
    "desc": " +@AS@% Attack Speed",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RecurveBow.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "AS",
        "value": 20.0
      }
    ]
  },
  "3": {
    "name": "Needlessly Large Rod",
    "desc": " +@AP@% Spell Power",
    "icon": "ASSETS/Maps/Particles/TFT/Icon_NeedlesslyLargeRod.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "AP",
        "value": 20.0
      }
    ]
  },
  "4": {
    "name": "Tear of the Goddess",
    "desc": " +@Mana@ Mana",
    "icon": "ASSETS/Maps/Particles/TFT/Icon_TearOfTheGoddess.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "Mana",
        "value": 20.0
      }
    ]
  },
  "5": {
    "name": "Chain Vest",
    "desc": "+@Armor@ Armor",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ChainVest.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "Armor",
        "value": 20.0
      }
    ]
  },
  "6": {
    "name": "Negatron Cloak",
    "desc": "+@MagicResist@ Magic Resist",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_NegatronCloak.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "MagicResist",
        "value": 20.0
      }
    ]
  },
  "7": {
    "name": "Giant's Belt",
    "desc": " +@Health@ Health",
    "icon": "ASSETS/Maps/Particles/TFT/Icon_GiantsBelt.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "Health",
        "value": 200.0
      }
    ]
  },
  "8": {
    "name": "Spatula",
    "desc": "It must do <i>something</i>...",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Spatula.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "FE9818EF",
        "value": 5.0
      }
    ]
  },
  "9": {
    "name": "Sparring Gloves",
    "desc": "+@CritChance@% Critical Strike Chance<br>+@DodgeChance@% Dodge Chance",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SparringGloves.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "CritChance",
        "value": 10.0
      },
      {
        "name": "DodgeChance",
        "value": 10.0
      }
    ]
  },
  "11": {
    "name": "Deathblade3",
    "desc": "Whenever the wearer kills or participates in killing an enemy, gain +@ADPerStack@ Attack Damage for the remainder of combat.<br><br>This effect can stack any number of times. Starts with @StartingStacks@ stacks.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_DeathBlade.TFT.png",
    "from": [
      1,
      1
    ],
    "effects": [
      {
        "name": "ADPerStack",
        "value": 15.0
      }
    ]
  },
  "12": {
    "name": "Giant Slayer",
    "desc": "The wearer's basic attacks deal an additional @MaxHPTrueDamage@% of the target's Maximum Health as true damage.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.png",
    "from": [
      1,
      2
    ],
    "effects": [
      {
        "name": "MaxHPTrueDamage",
        "value": 5.0
      }
    ]
  },
  "13": {
    "name": "Hextech Gunblade",
    "desc": "Basic Attacks and spells heal the wearer for @OmniVamp@% of the damage dealt.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HextechGunblade.TFT.png",
    "from": [
      1,
      3
    ],
    "effects": [
      {
        "name": "OmniVamp",
        "value": 25.0
      }
    ]
  },
  "14": {
    "name": "Spear of Shojin",
    "desc": "After casting their spell, the wearer's Basic Attacks restore @ManaPercentRestore@% of their Maximum Mana.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SpearOfShojin.TFT.png",
    "from": [
      1,
      4
    ],
    "effects": [
      {
        "name": "ManaPercentRestore",
        "value": 15.0
      }
    ]
  },
  "15": {
    "name": "Guardian Angel",
    "desc": "When the wearer dies, they cleanse negative effects and revive with up to @HealthRestore@ Health after a @StasisDuration@ second delay.<br><br>This effect can trigger once per combat.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GuardianAngel.TFT.png",
    "from": [
      1,
      5
    ],
    "effects": [
      {
        "name": "HealthRestore",
        "value": 500.0
      },
      {
        "name": "StasisDuration",
        "value": 2.0
      }
    ]
  },
  "16": {
    "name": "Bloodthirster",
    "desc": "Basic Attacks heal the wearer for @Lifesteal@% of the damage dealt.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Bloodthirster.TFT.png",
    "from": [
      1,
      6
    ],
    "effects": [
      {
        "name": "Lifesteal",
        "value": 40.0
      }
    ]
  },
  "17": {
    "name": "Zeke's Herald",
    "desc": "When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain +@AttackSpeed@% Attack Speed for the rest of combat.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ZekesHerald.TFT.png",
    "from": [
      1,
      7
    ],
    "effects": [
      {
        "name": "AttackSpeed",
        "value": 15.0
      },
      {
        "name": "HexRange",
        "value": 2.0
      }
    ]
  },
  "18": {
    "name": "Youmuu's Ghostblade",
    "desc": "Extra %i:scaleAD% +@AD@<br>Wearer is also an Assassin<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_YoumuusGhostblade.TFT.png",
    "from": [
      1,
      8
    ],
    "effects": [
      {
        "name": "AD",
        "value": 15.0
      }
    ]
  },
  "19": {
    "name": "Infinity Edge",
    "desc": "The wearer gains +@CriticalStrikeAmp@% Critical Strike Damage.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_InfinityEdge.TFT.png",
    "from": [
      1,
      9
    ],
    "effects": [
      {
        "name": "CriticalStrikeAmp",
        "value": 150.0
      },
      {
        "name": "CritChance",
        "value": 20.0
      },
      {
        "name": "AD",
        "value": 15.0
      }
    ]
  },
  "22": {
    "name": "Rapid Firecannon",
    "desc": "Wearer gains +100% Attack Range.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RapidFirecannon.TFT.png",
    "from": [
      2,
      2
    ],
    "effects": []
  },
  "23": {
    "name": "Guinsoo's Rageblade",
    "desc": "Basic Attacks grant the wearer +@AttackSpeedPerStack@% bonus Attack Speed for the rest of combat.<br><br>This effect can stack any number of times.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GuinsoosRageblade.TFT.png",
    "from": [
      2,
      3
    ],
    "effects": [
      {
        "name": "AttackSpeedPerStack",
        "value": 5.0
      }
    ]
  },
  "24": {
    "name": "Statikk Shiv",
    "desc": "Every third Basic Attack from the wearer deals @Damage@ magical damage to @BouncesTooltip@ enemies.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_StatikkShiv.TFT.png",
    "from": [
      2,
      4
    ],
    "effects": [
      {
        "name": "Damage",
        "value": 100.0
      },
      {
        "name": "Bounces",
        "value": 2.0
      },
      {
        "name": "BouncesTooltip",
        "value": 3.0
      }
    ]
  },
  "25": {
    "name": "Phantom Dancer",
    "desc": "Wearer dodges all critical strikes.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_PhantomDancer.TFT.png",
    "from": [
      2,
      5
    ],
    "effects": []
  },
  "26": {
    "name": "Cursed Blade",
    "desc": "Basic Attacks have a @ChanceOnHitToShrink@% chance on-hit to decrease the target's star level by 1 for the rest of combat.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_CursedBlade.TFT.png",
    "from": [
      2,
      6
    ],
    "effects": [
      {
        "name": "ChanceOnHitToShrink",
        "value": 20.0
      }
    ]
  },
  "27": {
    "name": "Titanic Hydra",
    "desc": "Basic Attacks deal an additional @MaxHealth@% of the wearer's Maximum Health as magic damage to the target and adjacent enemies behind them.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_TitanicHydra.TFT.png",
    "from": [
      2,
      7
    ],
    "effects": [
      {
        "name": "MaxHealth",
        "value": 3.0
      }
    ]
  },
  "28": {
    "name": "Blade of the Ruined King",
    "desc": "Extra %i:scaleAS% +@AS@<br>Wearer is also a Blademaster<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.TFT.png",
    "from": [
      2,
      8
    ],
    "effects": [
      {
        "name": "AS",
        "value": 20.0
      }
    ]
  },
  "29": {
    "name": "Repeating Crossbow",
    "desc": "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@AttackSpeedPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>This effect can stack any number of times.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.TFT.png",
    "from": [
      2,
      9
    ],
    "effects": [
      {
        "name": "AttackSpeedPerStack",
        "value": 20.0
      },
      {
        "name": "CritChancePerStack",
        "value": 20.0
      },
      {
        "name": "CritChance",
        "value": 20.0
      },
      {
        "name": "AS",
        "value": 20.0
      }
    ]
  },
  "33": {
    "name": "Rabadon's Deathcap",
    "desc": "Wearer gains +@APPercentAmp@% Spell Power Amplification.<br><br>(All sources of Spell Power are @APPercentAmp@% more effective)",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RabadonsDeathcap.TFT.png",
    "from": [
      3,
      3
    ],
    "effects": [
      {
        "name": "APPercentAmp",
        "value": 50.0
      }
    ]
  },
  "34": {
    "name": "Luden's Echo",
    "desc": "When the wearer deals damage with their spell, the first target hit and up to @ExtraBounces@ nearby enemies are dealt an additional @Damage@ magic damage.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_LudensEcho.TFT.png",
    "from": [
      3,
      4
    ],
    "effects": [
      {
        "name": "Damage",
        "value": 180.0
      },
      {
        "name": "Bounces",
        "value": 4.0
      },
      {
        "name": "HexRange",
        "value": 2.0
      },
      {
        "name": "ExtraBounces",
        "value": 3.0
      }
    ]
  },
  "35": {
    "name": "Locket of the Iron Solari",
    "desc": "When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain a shield that blocks @ShieldValue@ damage for @ShieldDuration@ seconds.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_LocketOfTheIronSolari.TFT.png",
    "from": [
      3,
      5
    ],
    "effects": [
      {
        "name": "ShieldValue",
        "value": 300.0
      },
      {
        "name": "ShieldDuration",
        "value": 7.0
      },
      {
        "name": "HexRange",
        "value": 2.0
      }
    ]
  },
  "36": {
    "name": "Ionic Spark",
    "desc": "Whenever an enemy casts a spell, the wearer deals @Damage@ true damage to the caster.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_IonicSpark.TFT.png",
    "from": [
      3,
      6
    ],
    "effects": [
      {
        "name": "Damage",
        "value": 125.0
      }
    ]
  },
  "37": {
    "name": "Morellonomicon",
    "desc": "When the wearer deals damage with their spell, they burn the target, dealing @BurnPercent@% of the target's Maximum Health as true damage over @BurnDuration@ seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Morellonomicon.TFT.png",
    "from": [
      3,
      7
    ],
    "effects": [
      {
        "name": "BurnPercent",
        "value": 20.0
      },
      {
        "name": "6DF27940",
        "value": 1.0
      },
      {
        "name": "MonsterCap",
        "value": 100.0
      },
      {
        "name": "BurnDuration",
        "value": 10.0
      }
    ]
  },
  "38": {
    "name": "Yuumi",
    "desc": "Extra %i:scaleAP% +@AP@<br>Wearer is also a Sorcerer<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Yuumi.TFT.png",
    "from": [
      3,
      8
    ],
    "effects": [
      {
        "name": "AP",
        "value": 20.0
      }
    ]
  },
  "39": {
    "name": "Jeweled Gauntlet",
    "desc": "The wearer's spells can critically strike.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Jeweled_Gauntlet.TFT.png",
    "from": [
      3,
      9
    ],
    "effects": [
      {
        "name": "CritChance",
        "value": 20.0
      },
      {
        "name": "AP",
        "value": 20.0
      }
    ]
  },
  "44": {
    "name": "Seraph's Embrace",
    "desc": "After casting their spell, the wearer restores @ManaRestore@ Mana.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SeraphsEmbrace.TFT.png",
    "from": [
      4,
      4
    ],
    "effects": [
      {
        "name": "ManaRestore",
        "value": 20.0
      }
    ]
  },
  "45": {
    "name": "Frozen Heart",
    "desc": "Reduces the Attack Speed of adjacent enemies by @AttackSpeedSlow@%.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_FrozenHeart.TFT.png",
    "from": [
      4,
      5
    ],
    "effects": [
      {
        "name": "AttackSpeedSlow",
        "value": 35.0
      },
      {
        "name": "0020F716",
        "value": 4.0
      }
    ]
  },
  "46": {
    "name": "Hush",
    "desc": "Basic Attacks have a @ChanceOnHitToSilence@% chance to silence the target on-hit, preventing the enemy from gaining mana for @SilenceDuration@ seconds.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hush.TFT.png",
    "from": [
      4,
      6
    ],
    "effects": [
      {
        "name": "ChanceOnHitToSilence",
        "value": 33.0
      },
      {
        "name": "SilenceDuration",
        "value": 4.0
      },
      {
        "name": "4516A18D",
        "value": 4.0
      }
    ]
  },
  "47": {
    "name": "Redemption",
    "desc": "When the wearer falls below @HPThreshold@% Health, nearby allies are healed for @HealthRestore@ Health after a 2.5 second delay.<br><br>This effect can trigger once per combat.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Redemption.TFT.png",
    "from": [
      4,
      7
    ],
    "effects": [
      {
        "name": "HealthRestore",
        "value": 1200.0
      },
      {
        "name": "HPThreshold",
        "value": 25.0
      },
      {
        "name": "5FFBBD48",
        "value": 50.0
      },
      {
        "name": "1E0630E9",
        "value": 25.0
      }
    ]
  },
  "48": {
    "name": "Darkin",
    "desc": "Extra %i:scaleMana% +@Mana@<br>Wearer is also a Demon<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Darkin.TFT.png",
    "from": [
      4,
      8
    ],
    "effects": [
      {
        "name": "Mana",
        "value": 20.0
      }
    ]
  },
  "49": {
    "name": "Hand Of Justice",
    "desc": "At the beginning of each planning phase, the wearer gains one of the following:<li>Basic attacks and spells deal +@TraitMultiplier@% Damage</li> <li>Basic attacks heal @TraitMultiplier@ Health on-hit</li>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HandOfJustice.TFT.png",
    "from": [
      4,
      9
    ],
    "effects": [
      {
        "name": "ChanceToGrow",
        "value": 66.667
      },
      {
        "name": "TraitMultiplier",
        "value": 40.0
      },
      {
        "name": "DodgeChance",
        "value": 10.0
      },
      {
        "name": "CritChance",
        "value": 10.0
      },
      {
        "name": "Mana",
        "value": 20.0
      }
    ]
  },
  "55": {
    "name": "Thornmail",
    "desc": "When the wearer is hit by a Basic Attack, they reflect @DamageReflect@% of the mitigated damage as magic damage.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Thornmail.TFT.png",
    "from": [
      5,
      5
    ],
    "effects": [
      {
        "name": "DamageReflect",
        "value": 100.0
      }
    ]
  },
  "56": {
    "name": "Sword Breaker",
    "desc": "Wearer's Basic Attacks have a @ChanceOnHitToDisarm@% chance to disarm the target for @DisarmDuration@ seconds, preventing that enemy from Basic Attacking.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SwordBreaker.TFT.png",
    "from": [
      5,
      6
    ],
    "effects": [
      {
        "name": "ChanceOnHitToDisarm",
        "value": 33.0
      },
      {
        "name": "DisarmDuration",
        "value": 3.0
      }
    ]
  },
  "57": {
    "name": "Red Buff",
    "desc": "Wearer's Basic Attacks burn the target on-hit, dealing @BurnPercent@% of the target's Maximum Health as true damage over @BurnDuration@ seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RedBuff.TFT.png",
    "from": [
      5,
      7
    ],
    "effects": [
      {
        "name": "BurnPercent",
        "value": 20.0
      },
      {
        "name": "BurnDuration",
        "value": 10.0
      },
      {
        "name": "6DF27940",
        "value": 1.0
      },
      {
        "name": "MonsterCap",
        "value": 100.0
      }
    ]
  },
  "58": {
    "name": "Knight's Vow",
    "desc": "Extra %i:scaleArmor% +@Armor@<br>Wearer is also a Knight<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_KnightsVow.TFT.png",
    "from": [
      5,
      8
    ],
    "effects": [
      {
        "name": "Armor",
        "value": 20.0
      }
    ]
  },
  "59": {
    "name": "Iceborn Gauntlet",
    "desc": "When the wearer dodges, they create a zone of ice. Enemies inside the zone have their Attack Speed reduced by @ASSlowPercentage@%.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_IcebornGauntlet.TFT.png",
    "from": [
      5,
      9
    ],
    "effects": [
      {
        "name": "ASSlowPercentage",
        "value": 35.0
      },
      {
        "name": "DodgeChance",
        "value": 20.0
      },
      {
        "name": "Armor",
        "value": 20.0
      }
    ]
  },
  "66": {
    "name": "Dragon's Claw",
    "desc": "Wearer gains @MagicReduction@% resistance to magic damage.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_DragonsClaw.TFT.png",
    "from": [
      6,
      6
    ],
    "effects": [
      {
        "name": "MagicReduction",
        "value": 75.0
      }
    ]
  },
  "67": {
    "name": "Zephyr",
    "desc": "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for @BanishDuration@ seconds.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Zephyr.TFT.png",
    "from": [
      6,
      7
    ],
    "effects": [
      {
        "name": "BanishDuration",
        "value": 6.0
      }
    ]
  },
  "68": {
    "name": "Runaan's Hurricane",
    "desc": "Extra %i:scaleMR% +@ExtraMR@<br>Basic Attack fire an additional missile at another nearby enemy, dealing @MultiplierForDamage@% of the wearer's Attack Damage and applying on-hit effects.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RunaansHurricane.TFT.png",
    "from": [
      6,
      8
    ],
    "effects": [
      {
        "name": "AdditionalTargets",
        "value": 1.0
      },
      {
        "name": "MultiplierForDamage",
        "value": 75.0
      },
      {
        "name": "ExtraMR",
        "value": 20.0
      }
    ]
  },
  "69": {
    "name": "Quicksilver",
    "desc": "The wearer gains a shield that prevents the next crowd control effect from applying. This shield refreshes after @CleanseICD@ seconds.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Mercurial.TFT.png",
    "from": [
      9,
      6
    ],
    "effects": [
      {
        "name": "CleanseICD",
        "value": 5.0
      },
      {
        "name": "DodgeChance",
        "value": 20.0
      },
      {
        "name": "MagicResist",
        "value": 20.0
      }
    ]
  },
  "77": {
    "name": "Warmog's Armor",
    "desc": "Wearer regenerates @HealthRegen@% of their missing Health per second.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_WarmogsArmor.TFT.png",
    "from": [
      7,
      7
    ],
    "effects": [
      {
        "name": "HealthRegen",
        "value": 6.0
      },
      {
        "name": "0C90F194",
        "value": 400.0
      }
    ]
  },
  "78": {
    "name": "Frozen Mallet",
    "desc": "Extra %i:scaleHealth% +@Health@<br>Wearer is also glacial<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.TFT.png",
    "from": [
      8,
      7
    ],
    "effects": [
      {
        "name": "Health",
        "value": 200.0
      }
    ]
  },
  "79": {
    "name": "Trap Claw",
    "desc": "At the beginning of combat, the wearer gains a shield that blocks the first enemy spell that hits them. The enemy that breaks the shield is stunned for @StunDuration@ seconds.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Backhand.TFT.png",
    "from": [
      7,
      9
    ],
    "effects": [
      {
        "name": "StunDuration",
        "value": 5.0
      },
      {
        "name": "DodgeChance",
        "value": 20.0
      },
      {
        "name": "Health",
        "value": 200.0
      }
    ]
  },
  "88": {
    "name": "Force of Nature",
    "desc": "Wearer's team gains +@MaxArmySizeIncrease@ maximum team size.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ForceOfNature.TFT.png",
    "from": [
      8,
      8
    ],
    "effects": [
      {
        "name": "MaxArmySizeIncrease",
        "value": 1.0
      }
    ]
  },
  "89": {
    "name": "Mittens",
    "desc": "Wearer is also a Yordle<br>Extra +10% Critical Strike Chance, +10% Dodge Chance<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Mittens.TFT.png",
    "from": [
      9,
      8
    ],
    "effects": [
      {
        "name": "DodgeChance",
        "value": 10.0
      },
      {
        "name": "CritChance",
        "value": 10.0
      }
    ]
  },
  "99": {
    "name": "Thief's Gloves",
    "desc": "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes Three Item Slots]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ThiefsGloves.TFT.png",
    "from": [
      9,
      9
    ],
    "effects": [
      {
        "name": "CritChance",
        "value": 20.0
      },
      {
        "name": "DodgeChance",
        "value": 20.0
      }
    ]
  },
  "100": {
    "name": "Spatula",
    "desc": "It must do <i>something</i>...",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Unknown.TFT.png",
    "from": [],
    "effects": []
  },
  "200": {
    "name": "Neeko's Help",
    "desc": "Place on a champion to create a one-star copy of them.<br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules>",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Blessing_WildCard.TFT.png",
    "from": [],
    "effects": []
  },
  "529": {
    "name": "Spell Thief",
    "desc": "@ChanceToSpellSteal@ chance to steal the enemy's spell and cast it",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SpellThiefsEdge.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "ChanceToSpellSteal",
        "value": 10.0
      }
    ]
  },
  "541": {
    "name": "Mortal Reminder",
    "desc": "TFT_item_description_MortalReminder",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_MortalReminder.TFT.png",
    "from": [],
    "effects": []
  },
  "10001": {
    "name": "KleptomancerEmptySlot",
    "desc": "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes Three Item Slots]</tftitemrules>EmptySlot",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Unknown.TFT.png",
    "from": [],
    "effects": []
  },
  "10002": {
    "name": "Jammed!",
    "desc": "Item temporarily disabled",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Jammed.TFT.png",
    "from": [],
    "effects": []
  },
  "10003": {
    "name": "B. F. Sword",
    "desc": " +@AD@ Attack Damage",
    "icon": "ASSETS/Maps/Particles/TFT/Icon_BFSword.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "AD",
        "value": 20.0
      }
    ]
  },
  "10004": {
    "name": "Deathblade",
    "desc": "Whenever the wearer kills or participates in killing an enemy, gain +@ADPerStack@ Attack Damage for the remainder of combat.<br><br>This effect can stack any number of times. Starts with @StartingStacks@ stacks.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_DeathBlade.TFT.png",
    "from": [],
    "effects": [
      {
        "name": "55CE8055",
        "value": null
      },
      {
        "name": "D0FCC895",
        "value": 40.0
      }
    ]
  },
  "10005": {
    "name": "Repeating Crossbow",
    "desc": "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@AttackSpeedPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>This effect can stack any number of times.",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.TFT.png",
    "from": [],
    "effects": []
  },
  "10006": {
    "name": "KleptomancerEmptySlot",
    "desc": "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes Three Item Slots]</tftitemrules>EmptySlot",
    "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_EmptySlot.TFT916CritComponent.png",
    "from": [],
    "effects": []
  }
};

export default items;