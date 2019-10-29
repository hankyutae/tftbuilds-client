let champions = {
  "4": {
    "name": "Twisted Fate",
    "id": 4,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_TwistedFate.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 50.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 3.0
    },
    "traits": [
      "Pirate",
      "Sorcerer"
    ],
    "ability": {
      "name": "Pick a Card",
      "desc": "Twisted Fate randomly picks a card, then throws it at his current target, dealing @ModifiedDamage@ magic damage and creating a special effect based on the color of the card.<br><br>Blue: Restores @BlueCardManaRestore@ mana to all allies adjacent to Twisted Fate.<br>Red: Deals @ModifiedDamage@ to all enemies adjacent to the target.<br>Gold: Stuns the target for @GoldCardStunDuration@ seconds.",
      "icon": "ASSETS/Characters/TFT_TwistedFate/HUD/Icons2D/TFT_TwistedFate_Spell.TFT.png",
      "variables": [
        {
          "key": "RedCardDamage",
          "values": [
            50.0,
            150.0,
            250.0,
            350.0,
            450.0,
            550.0,
            650.0
          ]
        },
        {
          "key": "BlueCardDamage",
          "values": [
            50.0,
            150.0,
            250.0,
            350.0,
            450.0,
            550.0,
            650.0
          ]
        },
        {
          "key": "BlueCardManaRestore",
          "values": [
            10.0,
            30.0,
            50.0,
            70.0,
            90.0,
            110.0,
            130.0
          ]
        },
        {
          "key": "GoldCardStunDuration",
          "values": [
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0
          ]
        },
        {
          "key": "GoldCardDamage",
          "values": [
            50.0,
            150.0,
            250.0,
            350.0,
            450.0,
            550.0,
            650.0
          ]
        }
      ]
    }
  },
  "10": {
    "name": "Kayle",
    "id": 10,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Kayle.png",
    "stats": {
      "hp": 750.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 50.0,
      "damage": 70.0,
      "damageScaleFactor": 1.25,
      "armor": 40.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 1.0,
      "range": 3.0
    },
    "traits": [
      "Noble",
      "Knight"
    ],
    "ability": {
      "name": "Divine Judgement",
      "desc": "Kayle shields her @Targets@ weakest allies, making them immune to all damage for @ShieldDuration@ seconds.",
      "icon": "ASSETS/Characters/Kayle/HUD/Icons2D/Kayle_R.png",
      "variables": [
        {
          "key": "ShieldDuration",
          "values": [
            1.5,
            2.0,
            2.5,
            3.0,
            3.5,
            4.0,
            4.5
          ]
        },
        {
          "key": "Targets",
          "values": [
            0.0,
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0
          ]
        }
      ]
    }
  },
  "18": {
    "name": "Tristana",
    "id": 18,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Tristana.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 50.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 4.0
    },
    "traits": [
      "Yordle",
      "Gunslinger"
    ],
    "ability": {
      "name": "Explosive Charge",
      "desc": "Tristana places a bomb on her current target which will detonate after she Basic Attacks them 3 times or @ExplosiveChargeDuration@ seconds pass without Tristana attacking them.<br><br>When the bomb detonates, it deals @ModifiedDamage@ magic damage to all nearby enemies, plus @PercentDamageIncrease@ for each Basic Attack, up to a maximum of @ModifiedMaxDamage@.",
      "icon": "ASSETS/Characters/Tristana/HUD/Icons2D/Tristana_E.png",
      "variables": [
        {
          "key": "ExplosiveChargeDuration",
          "values": [
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0
          ]
        },
        {
          "key": "ChargeBaseDamage",
          "values": [
            30.0,
            70.0,
            110.0,
            150.0,
            190.0,
            230.0,
            270.0
          ]
        },
        {
          "key": "PercentDamageIncreasePerStack",
          "values": [
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "key": "MaxChargeDamage",
          "values": [
            75.0,
            175.0,
            275.0,
            375.0,
            475.0,
            575.0,
            675.0
          ]
        }
      ]
    }
  },
  "19": {
    "name": "Warwick",
    "id": 19,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Warwick.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Wild",
      "Brawler"
    ],
    "ability": {
      "name": "Infinite Duress",
      "desc": "Warwick pounces on the weakest enemy, stunning them for @Duration@ seconds and striking them @Hits@ times, dealing @ModifiedDamage@ magic damage. Each strike triggers on-hit effects and heals Warwick for 100% of the damage dealt.",
      "icon": "ASSETS/Characters/Warwick/HUD/Icons2D/WarwickR.png",
      "variables": [
        {
          "key": "Duration",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        },
        {
          "key": "BaseDamage",
          "values": [
            75.0,
            150.0,
            225.0,
            300.0,
            375.0,
            450.0,
            525.0
          ]
        },
        {
          "key": "DashHexSpeed",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        },
        {
          "key": "Hits",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        }
      ]
    }
  },
  "21": {
    "name": "Miss Fortune",
    "id": 21,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_MissFortune.png",
    "stats": {
      "hp": 750.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 0.0,
      "damage": 75.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.95,
      "range": 3.0
    },
    "traits": [
      "Pirate",
      "Gunslinger"
    ],
    "ability": {
      "name": "Bullet Time",
      "desc": "Miss Fortune channels and fires waves of bullets in a cone for @ChannelDuration@ seconds, dealing @ModifiedDamage@ magic damage to all enemies within over the duration.",
      "icon": "ASSETS/Characters/MissFortune/HUD/Icons2D/MissFortune_R.png",
      "variables": [
        {
          "key": "Waves",
          "values": [
            14.0,
            14.0,
            14.0,
            14.0,
            14.0,
            14.0,
            14.0
          ]
        },
        {
          "key": "TotalDamage",
          "values": [
            600.0,
            1300.0,
            2000.0,
            2700.0,
            3400.0,
            4100.0,
            4800.0
          ]
        },
        {
          "key": "ChannelDuration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        }
      ]
    }
  },
  "22": {
    "name": "Ashe",
    "id": 22,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Ashe.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 0.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 4.0
    },
    "traits": [
      "Glacial",
      "Ranger"
    ],
    "ability": {
      "name": "Enchanted Crystal Arrow",
      "desc": "Ashe fires an arrow at the farthest enemy. It stops on the first target hit, dealing @ModifiedDamage@ magic damage and stunning them for @StunDurationPerSquare@ seconds per Hex traveled.",
      "icon": "ASSETS/Characters/Ashe/HUD/Icons2D/Ashe_R.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            0.0,
            200.0,
            400.0,
            600.0,
            800.0,
            1000.0,
            1200.0
          ]
        },
        {
          "key": "StunDurationPerSquare",
          "values": [
            0.5,
            1.0,
            1.5,
            2.0,
            2.5,
            3.0,
            3.5
          ]
        }
      ]
    }
  },
  "25": {
    "name": "Morgana",
    "id": 25,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Morgana.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 2.0
    },
    "traits": [
      "Demon",
      "Sorcerer"
    ],
    "ability": {
      "name": "Soul Shackles",
      "desc": "Morgana fires chains to all nearby enemies, dealing @ModifiedDamage@ magic damage.<br><br>After @ChainDuration@ seconds, all chained enemies still within range of Morgana are stunned for @StunDuration@ seconds and take @ModifiedDamage@ magic damage again.",
      "icon": "ASSETS/Characters/Morgana/HUD/Icons2D/FallenAngel_Purgatory.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            175.0,
            300.0,
            425.0,
            550.0,
            675.0,
            800.0
          ]
        },
        {
          "key": "ChainDuration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            0.0,
            2.0,
            4.0,
            6.0,
            8.0,
            10.0,
            12.0
          ]
        },
        {
          "key": "SlowPercent",
          "values": [
            20.0,
            20.0,
            20.0,
            20.0,
            20.0,
            20.0,
            20.0
          ]
        },
        {
          "key": "CanCastRange",
          "values": [
            575.0,
            575.0,
            575.0,
            575.0,
            575.0,
            575.0,
            575.0
          ]
        }
      ]
    }
  },
  "28": {
    "name": "Evelynn",
    "id": 28,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Evelyn.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 70.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Demon",
      "Assassin"
    ],
    "ability": {
      "name": "Last Caress",
      "desc": "Evelynn deals @ModifiedDamage@ magic damage to up to 3 nearby enemies, then teleports away.<br><br>This damage is increased to @ModifiedCritDamage@ against targets below @ExecuteThreshholdPercent@ health.",
      "icon": "ASSETS/Characters/Evelynn/HUD/Icons2D/Evelynn_R.png",
      "variables": [
        {
          "key": "CritMultiplier",
          "values": [
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0,
            8.0
          ]
        },
        {
          "key": "CritThreshold",
          "values": [
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "key": "Damage",
          "values": [
            100.0,
            200.0,
            300.0,
            400.0,
            500.0,
            600.0,
            700.0
          ]
        },
        {
          "key": "BlinkBackDistance",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        }
      ]
    }
  },
  "30": {
    "name": "Karthus",
    "id": 30,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Karthus.png",
    "stats": {
      "hp": 850.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 40.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 3.0
    },
    "traits": [
      "Phantom",
      "Sorcerer"
    ],
    "ability": {
      "name": "Requiem",
      "desc": "Karthus channels for 2.25 seconds, then deals @ModifiedDamage@ magic damage to @NumberOfTargets@ random enemies.",
      "icon": "ASSETS/Characters/Karthus/HUD/Icons2D/Karthus_R.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            100.0,
            350.0,
            600.0,
            850.0,
            1100.0,
            1350.0,
            1600.0
          ]
        },
        {
          "key": "NumberOfTargets",
          "values": [
            3.0,
            5.0,
            7.0,
            9.0,
            11.0,
            13.0,
            15.0
          ]
        }
      ]
    }
  },
  "31": {
    "name": "Cho'Gath",
    "id": 31,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Chogath.png",
    "stats": {
      "hp": 1000.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 70.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Void",
      "Brawler"
    ],
    "ability": {
      "name": "Rupture",
      "desc": "Cho'Gath ruptures a large area, dealing @ModifiedDamage@ magic damage and knocking up all enemies within for @KnockDuration@ seconds.",
      "icon": "ASSETS/Characters/Chogath/HUD/Icons2D/GreenTerror_SpikeSlam.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            0.0,
            175.0,
            350.0,
            525.0,
            700.0,
            875.0,
            1050.0
          ]
        },
        {
          "key": "KnockDuration",
          "values": [
            1.25,
            1.5,
            1.75,
            2.0,
            2.25,
            2.5,
            2.75
          ]
        },
        {
          "key": "RuptureDelay",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        }
      ]
    }
  },
  "34": {
    "name": "Anivia",
    "id": 34,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Anivia.png",
    "stats": {
      "hp": 750.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 50.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.8,
      "range": 3.0
    },
    "traits": [
      "Glacial",
      "Elementalist"
    ],
    "ability": {
      "name": "Glacial Storm",
      "desc": "Anivia creates a large hailstorm that lasts for @StormDuration@ seconds, dealing @ModifiedDamage@ magic damage over the duration and slowing the attack speed of all enemies inside of it by @AttackSpeedSlow@%.",
      "icon": "ASSETS/Characters/Anivia/HUD/Icons2D/Anivia_R.png",
      "variables": [
        {
          "key": "TotalDamage",
          "values": [
            500.0,
            800.0,
            1100.0,
            1400.0,
            1700.0,
            2000.0,
            2300.0
          ]
        },
        {
          "key": "AttackSpeedSlow",
          "values": [
            30.0,
            50.0,
            70.0,
            90.0,
            110.0,
            130.0,
            150.0
          ]
        },
        {
          "key": "StormDuration",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        }
      ]
    }
  },
  "38": {
    "name": "Kassadin",
    "id": 38,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Kassadin.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 0.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 35.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.55,
      "range": 1.0
    },
    "traits": [
      "Void",
      "Sorcerer"
    ],
    "ability": {
      "name": "Nether Blade",
      "desc": "Passive: Kassadin's basic attacks steal @ManaSteal@ mana from his target and grant him a @ModifiedShield@ damage shield for @ShieldDuration@ seconds.",
      "icon": "ASSETS/Characters/Kassadin/HUD/Icons2D/Kassadin_W.png",
      "variables": [
        {
          "key": "ShieldDuration",
          "values": [
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0
          ]
        },
        {
          "key": "ManaSteal",
          "values": [
            0.0,
            25.0,
            50.0,
            75.0,
            100.0,
            125.0,
            150.0
          ]
        }
      ]
    }
  },
  "41": {
    "name": "Gangplank",
    "id": 41,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Gangplank.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 0.0,
      "damage": 60.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 1.0
    },
    "traits": [
      "Pirate",
      "Gunslinger",
      "Blademaster"
    ],
    "ability": {
      "name": "Powder Kegs",
      "desc": "Passive: Gangplank periodically places barrels near enemies.<br><br>Active: Gangplank shoots his barrels, causing them all to explode, dealing @ModifiedDamage@ magic damage to nearby enemies and applying on-hit effects.",
      "icon": "ASSETS/Characters/Gangplank/HUD/Icons2D/Gangplank_E.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            150.0,
            250.0,
            350.0,
            450.0,
            550.0,
            650.0
          ]
        }
      ]
    }
  },
  "45": {
    "name": "Veigar",
    "id": 45,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Veigar.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.55,
      "range": 3.0
    },
    "traits": [
      "Yordle",
      "Sorcerer"
    ],
    "ability": {
      "name": "Primordial Burst",
      "desc": "Veigar blasts an enemy with magical energy, dealing @ModifiedDamage@ magic damage. If Veigar is a higher star level than his target, this damage is increased to @ModifiedLowerStarDamage@.",
      "icon": "ASSETS/Characters/Veigar/HUD/Icons2D/VeigarPrimordialBurst.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            350.0,
            650.0,
            950.0,
            1250.0,
            1550.0,
            1850.0
          ]
        },
        {
          "key": "LowerStarDamage",
          "values": [
            19999.0,
            19999.0,
            19999.0,
            19999.0,
            19999.0,
            19999.0,
            19999.0
          ]
        }
      ]
    }
  },
  "50": {
    "name": "Swain",
    "id": 50,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Swain.png",
    "stats": {
      "hp": 850.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 0.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 2.0
    },
    "traits": [
      "Imperial",
      "Demon",
      "Shapeshifter"
    ],
    "ability": {
      "name": "Demonflare",
      "desc": "Swain transforms into demon form for @TransformDuration@ seconds.<br><br>While in demon form, Swain drains health from nearby enemies, dealing @ModifiedDamage@ magic damage and healing himself for @ModifiedHeal@ over the duration for each enemy in range. At the end of the transformation, Swain sends out a Soul Flare, dealing @ModifiedSoulFlareDamage@ magic damage to all nearby enemies.",
      "icon": "ASSETS/Characters/Swain/HUD/Icons2D/Swain_R.png",
      "variables": [
        {
          "key": "TransformDuration",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        },
        {
          "key": "DamagePerTick",
          "values": [
            0.0,
            40.0,
            80.0,
            120.0,
            160.0,
            200.0,
            240.0
          ]
        },
        {
          "key": "HealPerTick",
          "values": [
            0.0,
            30.0,
            60.0,
            90.0,
            120.0,
            150.0,
            180.0
          ]
        },
        {
          "key": "SoulFlareDamage",
          "values": [
            0.0,
            300.0,
            600.0,
            900.0,
            1200.0,
            1500.0,
            1800.0
          ]
        },
        {
          "key": "HealthIncrease"
        },
        {
          "key": "TotalDamage",
          "values": [
            0.0,
            480.0,
            960.0,
            1440.0,
            1920.0,
            2400.0,
            2880.0
          ]
        },
        {
          "key": "TotalHeal",
          "values": [
            0.0,
            360.0,
            720.0,
            1080.0,
            1440.0,
            1800.0,
            2160.0
          ]
        }
      ]
    }
  },
  "53": {
    "name": "Blitzcrank",
    "id": 53,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Blitzcrank.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 35.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.5,
      "range": 1.0
    },
    "traits": [
      "Robot",
      "Brawler"
    ],
    "ability": {
      "name": "Rocket Grab",
      "desc": "Blitzcrank pulls the furthest enemy to him, dealing @ModifiedDamage@ magic damage and stunning them for @StunDuration@ seconds.<br><br>His next attack after pulling knocks up for 1 second.<br><br>Allies within range will prioritize attacking Blitzcrank's target.",
      "icon": "ASSETS/Characters/Blitzcrank/HUD/Icons2D/Blitzcrank_RocketGrab.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            -50.0,
            250.0,
            550.0,
            850.0,
            1150.0,
            1450.0,
            1750.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            2.5,
            2.5,
            2.5,
            2.5,
            2.5,
            2.5,
            2.5
          ]
        }
      ]
    }
  },
  "55": {
    "name": "Katarina",
    "id": 55,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Katarina.png",
    "stats": {
      "hp": 450.0,
      "hpScaleFactor": 1.8,
      "mana": 85.0,
      "initalMana": 0.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 1.0
    },
    "traits": [
      "Imperial",
      "Assassin"
    ],
    "ability": {
      "name": "Death Lotus",
      "desc": "Katarina channels for @Duration@ seconds, throwing knives at @NumberOfTargets@ nearby enemies, dealing @ModifiedDamage@ magic damage over the duration and reducing healing by 80% to her targets for @GrievousWoundsDuration@ seconds.",
      "icon": "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_R.png",
      "variables": [
        {
          "key": "DamagePerTick",
          "values": [
            20.0,
            45.0,
            70.0,
            95.0,
            120.0,
            145.0,
            170.0
          ]
        },
        {
          "key": "TicksPerSecond",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        },
        {
          "key": "Duration",
          "values": [
            2.5,
            2.5,
            2.5,
            2.5,
            2.5,
            2.5,
            2.5
          ]
        },
        {
          "key": "GrievousWoundsDuration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "NumberOfTargets",
          "values": [
            2.0,
            4.0,
            6.0,
            8.0,
            10.0,
            12.0,
            14.0
          ]
        },
        {
          "key": "TotalDamage",
          "values": [
            375.0,
            750.0,
            1125.0,
            1500.0,
            1875.0,
            2250.0,
            2625.0
          ]
        }
      ]
    }
  },
  "60": {
    "name": "Elise",
    "id": 60,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Elise.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 0.0,
      "damage": 45.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 2.0
    },
    "traits": [
      "Demon",
      "Shapeshifter"
    ],
    "ability": {
      "name": "Spider Form",
      "desc": "Elise transforms into a giant spider and summons @NumSpiderlings@ spiderlings to fight alongside her.<br><br>While in spider form, Elise gains @LifestealPercent@ bonus lifesteal. Spiderlings benefit from active Demon trait bonuses.",
      "icon": "ASSETS/Characters/Elise/HUD/Icons2D/EliseR.DDS",
      "variables": [
        {
          "key": "NumSpiderlings",
          "values": [
            1.0,
            1.0,
            2.0,
            4.0,
            5.0,
            6.0,
            7.0
          ]
        },
        {
          "key": "Lifesteal",
          "values": [
            0.3,
            0.6,
            0.9,
            1.2,
            1.5,
            1.8,
            2.1
          ]
        },
        {
          "key": "SpiderFormDuration",
          "values": [
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0
          ]
        }
      ]
    }
  },
  "63": {
    "name": "Brand",
    "id": 63,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Brand.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 60.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 3.0
    },
    "traits": [
      "Demon",
      "Elementalist"
    ],
    "ability": {
      "name": "Pyroclasm",
      "desc": "Brand launches a bouncing fireball at an enemy. This fireball will bounce to nearby enemies up to @MaxBounces@ times, dealing @ModifiedDamage@ magic damage each time it hits.",
      "icon": "ASSETS/Characters/Brand/HUD/Icons2D/BrandR.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            250.0,
            450.0,
            650.0,
            850.0,
            1050.0,
            1250.0
          ]
        },
        {
          "key": "MaxBounces",
          "values": [
            4.0,
            4.0,
            6.0,
            20.0,
            20.0,
            20.0,
            20.0
          ]
        }
      ]
    }
  },
  "67": {
    "name": "Vayne",
    "id": 67,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Vayne.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 0.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 3.0
    },
    "traits": [
      "Noble",
      "Ranger"
    ],
    "ability": {
      "name": "Silver Bolts",
      "desc": "Passive: Whenever Vayne Basic Attacks the same target 3 times, she deals @ModifiedDamage@ of her target's Maximum Health as true damage.",
      "icon": "ASSETS/Characters/Vayne/HUD/Icons2D/Vayne_SilveredBolts.png",
      "variables": [
        {
          "key": "PercentDamage",
          "values": [
            0.04,
            0.08,
            0.12,
            0.16,
            0.2,
            0.24,
            0.28
          ]
        }
      ]
    }
  },
  "76": {
    "name": "Nidalee",
    "id": 76,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Nidalee.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 85.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 3.0
    },
    "traits": [
      "Wild",
      "Shapeshifter"
    ],
    "ability": {
      "name": "Primal Surge",
      "desc": "Nidalee heals herself and an ally, restoring @ModifiedHeal@ health over @HoTDuration@ seconds, then transforms into cat form.<br><br>While in cat form, Nidalee's range is reduced to 1 hex and she gains @ADinCougar@ Bonus Attack Damage.",
      "icon": "ASSETS/Characters/Nidalee/HUD/Icons2D/Nidalee_R2.png",
      "variables": [
        {
          "key": "HoTDuration",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        },
        {
          "key": "HoTTotalHeal",
          "values": [
            -75.0,
            150.0,
            375.0,
            600.0,
            825.0,
            1050.0,
            1275.0
          ]
        },
        {
          "key": "ADInCougar",
          "values": [
            -30.0,
            20.0,
            70.0,
            120.0,
            170.0,
            220.0,
            270.0
          ]
        },
        {
          "key": "TransformDuration",
          "values": [
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0
          ]
        },
        {
          "key": "AnimTime",
          "values": [
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5
          ]
        }
      ]
    }
  },
  "78": {
    "name": "Poppy",
    "id": 78,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Poppy.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 40.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.5,
      "range": 1.0
    },
    "traits": [
      "Yordle",
      "Knight"
    ],
    "ability": {
      "name": "Keeper's Verdict",
      "desc": "Poppy creates a shockwave in a straight line that can hit up to @NumberOfTargets@ enemies, dealing @ModifiedDamage@ magic damage, knocking up and stunning them for @StunDuration@ seconds.",
      "icon": "ASSETS/Characters/Poppy/HUD/Icons2D/Poppy_R.png",
      "variables": [
        {
          "key": "DamagePart2",
          "values": [
            100.0,
            300.0,
            500.0,
            700.0,
            900.0,
            1100.0,
            1300.0
          ]
        },
        {
          "key": "KnockbackDurationPart2",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0
          ]
        },
        {
          "key": "PoppyAnimLockDuration",
          "values": [
            0.75,
            0.75,
            0.75,
            0.75,
            0.75,
            0.75,
            0.75
          ]
        },
        {
          "key": "NumberOfTargets",
          "values": [
            0.0,
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0
          ]
        }
      ]
    }
  },
  "80": {
    "name": "Pantheon",
    "id": 80,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Pantheon.png",
    "stats": {
      "hp": 850.0,
      "hpScaleFactor": 1.8,
      "mana": 200.0,
      "initalMana": 150.0,
      "damage": 75.0,
      "damageScaleFactor": 1.25,
      "armor": 80.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.75,
      "range": 1.0
    },
    "traits": [
      "Dragon",
      "Guardian"
    ],
    "ability": {
      "name": "Grand Starfall",
      "desc": "Pantheon leaps in the air, crashing down towards the farthest enemy, stunning them for @StunDuration@ seconds.<br><br>Enemies in Pantheon's path take @ModifiedDamage@ of their Maximum Health as magic damage. They then burn for an additional @BurnPercent*100@% of their Maximum Health as true damage over @BurnDuration@ seconds, reducing healing by 80%.",
      "icon": "ASSETS/Characters/TFT_Pantheon/HUD/Icons2D/TFT_Pantheon_Spell.TFT_Pantheon.png",
      "variables": [
        {
          "key": "PercentHealthDamage",
          "values": [
            0.0,
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6
          ]
        },
        {
          "key": "Radius",
          "values": [
            450.0,
            450.0,
            450.0,
            450.0,
            450.0,
            450.0,
            450.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "BurnPercent",
          "values": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ]
        },
        {
          "key": "BurnDuration",
          "values": [
            10.0,
            10.0,
            10.0,
            10.0,
            10.0,
            10.0,
            10.0
          ]
        }
      ]
    }
  },
  "82": {
    "name": "Mordekaiser",
    "id": 82,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Mordekaiser.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 40.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.5,
      "range": 1.0
    },
    "traits": [
      "Phantom",
      "Knight"
    ],
    "ability": {
      "name": "Obliterate",
      "desc": "Mordekaiser slams his mace on the two spaces in front of him, dealing @ModifiedDamage@ magic damage to enemies within.",
      "icon": "ASSETS/Characters/Mordekaiser/HUD/Icons2D/MordekaiserQ.MordeVGU.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            0.0,
            250.0,
            500.0,
            750.0,
            1000.0,
            1250.0,
            1500.0
          ]
        },
        {
          "key": "MaceStartDistance",
          "values": [
            400.0,
            400.0,
            400.0,
            400.0,
            400.0,
            400.0,
            400.0
          ]
        },
        {
          "key": "MaceLength",
          "values": [
            625.0,
            625.0,
            625.0,
            625.0,
            625.0,
            625.0,
            625.0
          ]
        },
        {
          "key": "RectangleWidth",
          "values": [
            160.0,
            160.0,
            160.0,
            160.0,
            160.0,
            160.0,
            160.0
          ]
        }
      ]
    }
  },
  "84": {
    "name": "Akali",
    "id": 84,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Akali.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 25.0,
      "initalMana": 0.0,
      "damage": 80.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.8,
      "range": 1.0
    },
    "traits": [
      "Ninja",
      "Assassin"
    ],
    "ability": {
      "name": "Five Point Strike",
      "desc": "Akali throws kunai at her target, dealing 150 %i:scaleAP% magic damage.<br>There is a 25% %i:scaleCrit% chance that this spell will critically strike for 225 %i:scaleCritMult% magic damage instead.",
      "icon": "ASSETS/Characters/Akali/HUD/Icons2D/Akali_Q.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            200.0,
            350.0,
            500.0,
            650.0,
            800.0,
            950.0
          ]
        },
        {
          "key": "ConeDeg",
          "values": [
            30.0,
            30.0,
            30.0,
            30.0,
            30.0,
            30.0,
            30.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        }
      ]
    }
  },
  "85": {
    "name": "Kennen",
    "id": 85,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Kennen.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 2.0
    },
    "traits": [
      "Ninja",
      "Yordle",
      "Elementalist"
    ],
    "ability": {
      "name": "Slicing Maelstrom",
      "desc": "Kennen summons a storm around himself for @Duration@ seconds, calling down lightning bolts on all enemies in the area every @TickRate@ second and dealing @ModifiedDamage@ magic damage over the duration. Each enemy struck by 3 lightning bolts is stunned for @StunDuration@ seconds.",
      "icon": "ASSETS/Characters/Kennen/HUD/Icons2D/Kennen_R.png",
      "variables": [
        {
          "key": "TickRate",
          "values": [
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "key": "Duration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "Damage",
          "values": [
            0.0,
            225.0,
            450.0,
            675.0,
            900.0,
            1125.0,
            1350.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        }
      ]
    }
  },
  "86": {
    "name": "Garen",
    "id": 86,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Garen.png",
    "stats": {
      "hp": 600.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 40.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Noble",
      "Knight"
    ],
    "ability": {
      "name": "Judgement",
      "desc": "Garen spins his sword for @SpinDuration@ seconds, becoming immune to magic damage and dealing @ModifiedDamage@ magic damage to nearby enemies over the duration.",
      "icon": "ASSETS/Characters/Garen/HUD/Icons2D/Garen_E1.png",
      "variables": [
        {
          "key": "SpinDuration",
          "values": [
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0
          ]
        },
        {
          "key": "ETotalTicks",
          "values": [
            9.0,
            9.0,
            9.0,
            9.0,
            9.0,
            9.0,
            9.0
          ]
        },
        {
          "key": "DamagePerTick",
          "values": [
            15.0,
            40.0,
            65.0,
            90.0,
            115.0,
            140.0,
            165.0
          ]
        }
      ]
    }
  },
  "89": {
    "name": "Leona",
    "id": 89,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Leona.png",
    "stats": {
      "hp": 800.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 50.0,
      "damage": 45.0,
      "damageScaleFactor": 1.25,
      "armor": 100.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.55,
      "range": 1.0
    },
    "traits": [
      "Noble",
      "Guardian"
    ],
    "ability": {
      "name": "Solar Flare",
      "desc": "Leona calls down a solar ray in an area, dealing @ModifiedDamage@ magic damage to all enemies within and stunning the enemy in the center for @CCDuration@ seconds.",
      "icon": "ASSETS/Characters/Leona/HUD/Icons2D/LeonaSolarFlare.png",
      "variables": [
        {
          "key": "DelayTime",
          "values": [
            0.625,
            0.625,
            0.625,
            0.625,
            0.625,
            0.625,
            0.625
          ]
        },
        {
          "key": "CCDuration",
          "values": [
            3.0,
            5.0,
            7.0,
            9.0,
            11.0,
            13.0,
            15.0
          ]
        },
        {
          "key": "Damage",
          "values": [
            100.0,
            175.0,
            250.0,
            325.0,
            400.0,
            475.0,
            550.0
          ]
        }
      ]
    }
  },
  "98": {
    "name": "Shen",
    "id": 98,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Shen.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 100.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 1.0
    },
    "traits": [
      "Ninja",
      "Blademaster"
    ],
    "ability": {
      "name": "Spirit's Refuge",
      "desc": "Shen creates a zone around himself for @ZoneDuration@ seconds, granting all nearby allies 100% chance to dodge incoming basic attacks.",
      "icon": "ASSETS/Characters/Shen/HUD/Icons2D/Shen_W.png",
      "variables": [
        {
          "key": "ZoneDuration",
          "values": [
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0,
            8.0
          ]
        }
      ]
    }
  },
  "102": {
    "name": "Shyvana",
    "id": 102,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Shyvana.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 85.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 1.0
    },
    "traits": [
      "Dragon",
      "Shapeshifter"
    ],
    "ability": {
      "name": "Dragon's Descent",
      "desc": "Shyvana dashes away from her current target and transforms into dragon form.<br><br>While in dragon form, Shyvana's Basic Attack becomes ranged, she gains @ADWhileDragon@ Attack Damage, and her Basic Attacks burn her enemies for @BurnDuration@ seconds, dealing @ModifiedDamage@ magic damage.",
      "icon": "ASSETS/Characters/Shyvana/HUD/Icons2D/ShyvanaDragonsDescent.png",
      "variables": [
        {
          "key": "TransformDuration",
          "values": [
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0
          ]
        },
        {
          "key": "ADWhileDragon",
          "values": [
            50.0,
            100.0,
            150.0,
            200.0,
            250.0,
            300.0,
            350.0
          ]
        },
        {
          "key": "BurnDuration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "BurnDamage",
          "values": [
            100.0,
            200.0,
            300.0,
            400.0,
            500.0,
            600.0,
            700.0
          ]
        },
        {
          "key": "ExtraAARange",
          "values": [
            480.0,
            480.0,
            480.0,
            480.0,
            480.0,
            480.0,
            480.0
          ]
        }
      ]
    }
  },
  "103": {
    "name": "Ahri",
    "id": 103,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Ahri.png",
    "stats": {
      "hp": 450.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.55,
      "range": 3.0
    },
    "traits": [
      "Wild",
      "Sorcerer"
    ],
    "ability": {
      "name": "Orb of Deception",
      "desc": "Ahri fires an orb in a line, dealing @ModifiedDamage@ magic damage to all enemies it passes through.<br><br>It then returns to her, dealing @ModifiedDamage@ true damage to all enemies it passes through.",
      "icon": "ASSETS/Characters/Ahri/HUD/Icons2D/Ahri_OrbofDeception.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            100.0,
            200.0,
            300.0,
            400.0,
            500.0,
            475.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        }
      ]
    }
  },
  "104": {
    "name": "Graves",
    "id": 104,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Graves.png",
    "stats": {
      "hp": 450.0,
      "hpScaleFactor": 1.8,
      "mana": 0.0,
      "initalMana": 0.0,
      "damage": 55.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.55,
      "range": 1.0
    },
    "traits": [
      "Pirate",
      "Gunslinger"
    ],
    "ability": {
      "name": "Buckshot",
      "desc": "Passive: Graves' basic attacks deal 5% %i:scaleAD% bonus physical damage and hit all enemies in a cone in front of him. Graves applies on-hit effects to all enemies hit.",
      "icon": "ASSETS/Characters/Graves/HUD/Icons2D/BuckshotOld.png",
      "variables": [
        {
          "key": "DamageMultiplier",
          "values": [
            0.0,
            0.05,
            0.1,
            0.15,
            0.2,
            0.25,
            0.3
          ]
        }
      ]
    }
  },
  "106": {
    "name": "Volibear",
    "id": 106,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Volibear.png",
    "stats": {
      "hp": 750.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 70.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 1.0
    },
    "traits": [
      "Glacial",
      "Brawler"
    ],
    "ability": {
      "name": "Thunder Claws",
      "desc": "Volibear empowers his attacks for the next 20 seconds, causing them to chain to up to 3 nearby enemies. These chains deal 80% %i:scaleAD% physical damage and apply on-hit effects.",
      "icon": "ASSETS/Characters/Volibear/HUD/Icons2D/VolibearR.png",
      "variables": [
        {
          "key": "BuffDuration",
          "values": [
            20.0,
            20.0,
            20.0,
            20.0,
            20.0,
            20.0,
            20.0
          ]
        },
        {
          "key": "MaxBounces",
          "values": [
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0
          ]
        },
        {
          "key": "ChainADMult",
          "values": [
            0.7,
            0.8,
            0.9,
            1.0,
            1.1,
            1.2,
            1.3
          ]
        },
        {
          "key": "SizeIncrease",
          "values": [
            0.08,
            0.08,
            0.08,
            0.08,
            0.08,
            0.08,
            0.08
          ]
        },
        {
          "key": "HexRange",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        }
      ]
    }
  },
  "107": {
    "name": "Rengar",
    "id": 107,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Rengar.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 70.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Wild",
      "Assassin"
    ],
    "ability": {
      "name": "Savagery",
      "desc": "Rengar leaps to and stabs the weakest enemy, dealing @LeapDamage@ physical damage and applying on-hit effects to his target.<br><br>After this leap, Rengar gains @ASBuffPercent@ Attack Speed and @CritBuffPercent@ Critical Strike Chance for the next @BuffDuration@ seconds.",
      "icon": "ASSETS/Characters/Rengar/HUD/Icons2D/RengarQ.png",
      "variables": [
        {
          "key": "ADMult",
          "values": [
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0
          ]
        },
        {
          "key": "ASBuff",
          "values": [
            0.1,
            0.3,
            0.5,
            0.7,
            0.9,
            1.1,
            1.3
          ]
        },
        {
          "key": "CritBuff",
          "values": [
            0.25,
            0.25,
            0.25,
            0.25,
            0.25,
            0.25,
            0.25
          ]
        },
        {
          "key": "BuffDuration",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        }
      ]
    }
  },
  "110": {
    "name": "Varus",
    "id": 110,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Varus.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 4.0
    },
    "traits": [
      "Demon",
      "Ranger"
    ],
    "ability": {
      "name": "Piercing Arrow",
      "desc": "Varus channels for 1.5 seconds, then fires a piercing arrow, dealing @ModifiedDamage@ magic damage to all enemies in its path.",
      "icon": "ASSETS/Characters/Varus/HUD/Icons2D/VarusQ.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            300.0,
            550.0,
            800.0,
            1050.0,
            1300.0,
            1550.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            8.0,
            8.0,
            8.0,
            8.0,
            8.0,
            8.0,
            8.0
          ]
        }
      ]
    }
  },
  "113": {
    "name": "Sejuani",
    "id": 113,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Sejuani.png",
    "stats": {
      "hp": 800.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 45.0,
      "damageScaleFactor": 1.25,
      "armor": 40.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.55,
      "range": 1.0
    },
    "traits": [
      "Glacial",
      "Knight"
    ],
    "ability": {
      "name": "Glacial Prison",
      "desc": "After a @ExplosionDelay@ second delay, Sejuani creates a glacial prison on an enemy, dealing @ModifiedDamage@ magic damage to all nearby enemeis and stunning them for @StunDuration@ seconds.",
      "icon": "ASSETS/Characters/Sejuani/HUD/Icons2D/Sejuani_R.png",
      "variables": [
        {
          "key": "ExplosionDelay",
          "values": [
            0.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "Damage",
          "values": [
            25.0,
            100.0,
            175.0,
            250.0,
            325.0,
            400.0,
            475.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            0.5,
            2.0,
            3.5,
            5.0,
            6.5,
            8.0,
            9.5
          ]
        }
      ]
    }
  },
  "114": {
    "name": "Fiora",
    "id": 114,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Fiora.png",
    "stats": {
      "hp": 450.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 1.0,
      "range": 1.0
    },
    "traits": [
      "Noble",
      "Blademaster"
    ],
    "ability": {
      "name": "Riposte",
      "desc": "Fiora enters a defensive stance for @BlockDuration@ seconds, becoming immune to damage and enemy spell effects. As she exits this stance, she ripostes, dealing @ModifiedDamage@ magic damage to a nearby enemy and stunning them for @StunDuration@ seconds.",
      "icon": "ASSETS/Characters/Fiora/HUD/Icons2D/Fiora_W.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            -50.0,
            100.0,
            250.0,
            400.0,
            550.0,
            700.0,
            850.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        },
        {
          "key": "BlockDuration",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        }
      ]
    }
  },
  "117": {
    "name": "Lulu",
    "id": 117,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Lulu.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 2.0
    },
    "traits": [
      "Yordle",
      "Sorcerer"
    ],
    "ability": {
      "name": "Wild Growth",
      "desc": "Lulu makes @Targets@ allies giant, granting them @ModifiedBonusHealth@ bonus health and knocking up adjacent enemies near them for @CCDuration@ seconds.",
      "icon": "ASSETS/Characters/Lulu/HUD/Icons2D/Lulu_GiantGrowth.png",
      "variables": [
        {
          "key": "BonusHealth",
          "values": [
            200.0,
            300.0,
            400.0,
            500.0,
            600.0,
            700.0,
            800.0
          ]
        },
        {
          "key": "Targets",
          "values": [
            0.0,
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0
          ]
        },
        {
          "key": "BuffDuration",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        },
        {
          "key": "CCDuration",
          "values": [
            1.25,
            1.25,
            1.25,
            1.25,
            1.25,
            1.25,
            1.25
          ]
        }
      ]
    }
  },
  "119": {
    "name": "Draven",
    "id": 119,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Draven.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 50.0,
      "initalMana": 0.0,
      "damage": 70.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.75,
      "range": 3.0
    },
    "traits": [
      "Imperial",
      "Blademaster"
    ],
    "ability": {
      "name": "Spinning Axes",
      "desc": "Draven starts spinning an axe, granting him 150% %i:scaleAD% bonus physical damage on-hit on his next attack.<br><br>It will return to his location after striking the target and if Draven catches it, it will refresh the buff.<br><br>Draven can spin up to two axes at a time.",
      "icon": "ASSETS/Characters/Draven/HUD/Icons2D/Draven_SpinningAxe.png",
      "variables": [
        {
          "key": "BuffDuration",
          "values": [
            5.75,
            5.75,
            5.75,
            5.75,
            5.75,
            5.75,
            5.75
          ]
        },
        {
          "key": "ADMult",
          "values": [
            1.0,
            1.5,
            2.0,
            2.5,
            3.0,
            3.5,
            4.0
          ]
        },
        {
          "key": "ASBuff",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        }
      ]
    }
  },
  "121": {
    "name": "Kha'Zix",
    "id": 121,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Khazix.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 65.0,
      "initalMana": 0.0,
      "damage": 55.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Void",
      "Assassin"
    ],
    "ability": {
      "name": "Taste their Fear",
      "desc": "Kha'Zix slashes the nearest enemy, dealing @ModifiedDamage@ magic damage. If the enemy has no adjacent teammates, this damage is increased to @ModifiedIsolationDamage@.",
      "icon": "ASSETS/Characters/KhaZix/HUD/Icons2D/Khazix_Q.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            150.0,
            250.0,
            350.0,
            450.0,
            550.0,
            650.0
          ]
        },
        {
          "key": "IsolationDamage",
          "values": [
            200.0,
            400.0,
            600.0,
            800.0,
            1000.0,
            1200.0,
            1400.0
          ]
        }
      ]
    }
  },
  "122": {
    "name": "Darius",
    "id": 122,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Darius.png",
    "stats": {
      "hp": 600.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 40.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.5,
      "range": 1.0
    },
    "traits": [
      "Imperial",
      "Knight"
    ],
    "ability": {
      "name": "Decimate",
      "desc": "Darius swings his axe in a circle, dealing @ModifiedDamage@ magic damage and healing himself for @ModifiedHeal@ health for each enemy hit.",
      "icon": "ASSETS/Characters/Darius/HUD/Icons2D/Darius_Icon_Decimate.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            100.0,
            150.0,
            200.0,
            250.0,
            300.0,
            350.0,
            400.0
          ]
        },
        {
          "key": "Heal",
          "values": [
            50.0,
            100.0,
            150.0,
            200.0,
            250.0,
            300.0,
            350.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        }
      ]
    }
  },
  "126": {
    "name": "Jayce",
    "id": 126,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Jayce.png",
    "stats": {
      "hp": 600.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 50.0,
      "damage": 60.0,
      "damageScaleFactor": 1.25,
      "armor": 35.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 1.0
    },
    "traits": [
      "Hextech",
      "Shapeshifter"
    ],
    "ability": {
      "name": "Transform Mercury Cannon",
      "desc": "Jayce knocks a nearby enemy away, dealing @ModifiedDamage@ magic damage and stunning them for @CCDuration@ seconds. He then transforms into cannon form and gains max attack speed for his next @AAMax@ Basic Attacks.<br><br>While in cannon form, Jayce's Attack Range is increased by 3 hexes.",
      "icon": "ASSETS/Characters/TFT_Jayce/HUD/Icons2D/TFT_Jayce_Spell.TFT_Hextech.png",
      "variables": [
        {
          "key": "RangeIncrease",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "TransformDuration",
          "values": [
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0
          ]
        },
        {
          "key": "Damage",
          "values": [
            50.0,
            200.0,
            350.0,
            500.0,
            650.0,
            800.0,
            950.0
          ]
        },
        {
          "key": "CCDuration",
          "values": [
            0.75,
            2.5,
            4.25,
            6.0,
            7.75,
            9.5,
            11.25
          ]
        },
        {
          "key": "KnockbackDistance",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "AAMax",
          "values": [
            1.0,
            3.0,
            5.0,
            7.0,
            9.0,
            11.0,
            13.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        }
      ]
    }
  },
  "127": {
    "name": "Lissandra",
    "id": 127,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Lissandra.png",
    "stats": {
      "hp": 500.0,
      "hpScaleFactor": 1.8,
      "mana": 85.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 2.0
    },
    "traits": [
      "Glacial",
      "Elementalist"
    ],
    "ability": {
      "name": "Frozen Tomb",
      "desc": "Lissandra encases an enemy in ice, stunning them for @EnemyStunDuration@ seconds and dealing @ModifiedDamage@ magic damage to all enemies in the surrounding area.<br><br>If she is below @SelfUltPercentage@ health, Lissandra instead encases herself, becoming untargetable for @SelfDuration@ seconds and dealing @ModifiedDamage@ magic damage to all enemies in the surrounding area.",
      "icon": "ASSETS/Characters/Lissandra/HUD/Icons2D/Lissandra_R.png",
      "variables": [
        {
          "key": "EnemyStunDuration",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        },
        {
          "key": "SelfDuration",
          "values": [
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "Damage",
          "values": [
            25.0,
            175.0,
            325.0,
            475.0,
            625.0,
            775.0,
            925.0
          ]
        },
        {
          "key": "SlowDuration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "SlowAmount",
          "values": [
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "SlowFieldDuration",
          "values": [
            0.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "MaxHexRange",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "SelfUltHealthPercent",
          "values": [
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5
          ]
        }
      ]
    }
  },
  "136": {
    "name": "Aurelion Sol",
    "id": 136,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_AurelionSol.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 3.0
    },
    "traits": [
      "Dragon",
      "Sorcerer"
    ],
    "ability": {
      "name": "Voice of Light",
      "desc": "Aurelion Sol breathes fire in a line, dealing @ModifiedDamage@ magic damage to all enemies in the area.",
      "icon": "ASSETS/Characters/AurelionSol/HUD/Icons2D/AurelionSol_R.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            250.0,
            500.0,
            750.0,
            1000.0,
            1250.0,
            1500.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            8.0,
            8.0,
            8.0,
            8.0,
            8.0,
            8.0,
            8.0
          ]
        }
      ]
    }
  },
  "145": {
    "name": "Kai'Sa",
    "id": 145,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Kaisa.TFT_Set1_KaiSa.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 50.0,
      "damage": 55.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 1.25,
      "range": 2.0
    },
    "traits": [
      "Void",
      "Ranger",
      "Assassin"
    ],
    "ability": {
      "name": "Killer Instinct",
      "desc": "Kai'Sa dashes to the furthest enemy unit, gaining +@ASPercent*100@% Attack Speed and a shield that blocks @ShieldAmount@ damage for @Duration@ seconds.",
      "icon": "ASSETS/Characters/TFT_Kaisa/HUD/Icons2D/TFT_Kaisa_R.TFT_Set1_KaiSa.png",
      "variables": [
        {
          "key": "ASPercent",
          "values": [
            0.25,
            0.5,
            0.75,
            1.0,
            1.25,
            1.5,
            1.75
          ]
        },
        {
          "key": "Duration",
          "values": [
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0,
            3.0
          ]
        },
        {
          "key": "ShieldAmount",
          "values": [
            100.0,
            400.0,
            700.0,
            1000.0,
            1300.0,
            1600.0,
            1900.0
          ]
        }
      ]
    }
  },
  "150": {
    "name": "Gnar",
    "id": 150,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Gnar.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 100.0,
      "initalMana": 0.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 2.0
    },
    "traits": [
      "Wild",
      "Yordle",
      "Shapeshifter"
    ],
    "ability": {
      "name": "GNAR!",
      "desc": "Gnar leaps towards an enemy and transforms into Mega Gnar, throwing nearby enemies, dealing @ModifiedDamage@ magic damage and stunning them for @RCCDuration@ seconds.<br><br>While in Mega Gnar form, Gnar gains @TransformHealth@ Health and @TransformAD@ Attack Damage.",
      "icon": "ASSETS/Characters/Gnar/HUD/Icons2D/GnarTransform.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            100.0,
            200.0,
            300.0,
            400.0,
            500.0,
            600.0,
            700.0
          ]
        },
        {
          "key": "RCCDuration",
          "values": [
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "RKnockbackDistance",
          "values": [
            500.0,
            500.0,
            500.0,
            500.0,
            500.0,
            500.0,
            500.0
          ]
        },
        {
          "key": "TransformDuration",
          "values": [
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0
          ]
        },
        {
          "key": "TransformHealth",
          "values": [
            50.0,
            250.0,
            450.0,
            650.0,
            850.0,
            1050.0,
            1250.0
          ]
        },
        {
          "key": "TransformAD",
          "values": [
            0.0,
            50.0,
            100.0,
            150.0,
            200.0,
            250.0,
            300.0
          ]
        }
      ]
    }
  },
  "157": {
    "name": "Yasuo",
    "id": 157,
    "cost": 5,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Yasuo.png",
    "stats": {
      "hp": 750.0,
      "hpScaleFactor": 1.8,
      "mana": 25.0,
      "initalMana": 0.0,
      "damage": 75.0,
      "damageScaleFactor": 1.25,
      "armor": 35.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 1.0,
      "range": 1.0
    },
    "traits": [
      "Exile",
      "Blademaster"
    ],
    "ability": {
      "name": "Steel Tempest",
      "desc": "Yasuo stabs his sword into the two spaces in front of him, dealing @ModifiedDamage@ magic damage and applying on-hit effects to enemies within. Every third cast, Yasuo instead throws a tornado in a line that travels @QEmpowerHexRange@ hexes and additionally knocks enemies up for @QKnockupDuration@ seconds.",
      "icon": "ASSETS/Characters/Yasuo/HUD/Icons2D/Yasuo_Q1.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            -50.0,
            150.0,
            350.0,
            550.0,
            750.0,
            950.0,
            1150.0
          ]
        },
        {
          "key": "QHexRange",
          "values": [
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "QEmpowerHexRange",
          "values": [
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0,
            6.0
          ]
        },
        {
          "key": "QCountForEmpower",
          "values": [
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0,
            2.0
          ]
        },
        {
          "key": "QWidth",
          "values": [
            75.0,
            75.0,
            75.0,
            75.0,
            75.0,
            75.0,
            75.0
          ]
        },
        {
          "key": "QKnockupDuration",
          "values": [
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ]
        }
      ]
    }
  },
  "164": {
    "name": "Camille",
    "id": 164,
    "cost": 1,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Camille.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 75.0,
      "damage": 55.0,
      "damageScaleFactor": 1.25,
      "armor": 30.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Hextech",
      "Blademaster"
    ],
    "ability": {
      "name": "The Hextech Ultimatum",
      "desc": "Camille singles out and leaps on an enemy, dealing @ModifiedDamage@ magic damage and rooting them for @Duration@ seconds.<br><br>Allies within range will prioritize attacking Camille's target.",
      "icon": "ASSETS/Characters/TFT_Camille/HUD/Icons2D/TFT_Camille_R.TFT_Hextech.png",
      "variables": [
        {
          "key": "Duration",
          "values": [
            3.0,
            4.0,
            5.0,
            6.0,
            7.0,
            8.0,
            9.0
          ]
        },
        {
          "key": "Damage",
          "values": [
            75.0,
            200.0,
            325.0,
            450.0,
            575.0,
            700.0,
            825.0
          ]
        }
      ]
    }
  },
  "201": {
    "name": "Braum",
    "id": 201,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Braum.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 40.0,
      "damageScaleFactor": 1.25,
      "armor": 75.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Glacial",
      "Guardian"
    ],
    "ability": {
      "name": "Unbreakable",
      "desc": "Braum puts up his shield for @ShieldDuration@ seconds, absorbing and stopping all incoming missiles and reducing his damage taken from that direction by @ShieldDR@%.",
      "icon": "ASSETS/Characters/Braum/HUD/Icons2D/Braum_E.png",
      "variables": [
        {
          "key": "ShieldDR",
          "values": [
            60.0,
            70.0,
            80.0,
            90.0,
            100.0,
            110.0,
            120.0
          ]
        },
        {
          "key": "ShieldDuration",
          "values": [
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0
          ]
        }
      ]
    }
  },
  "203": {
    "name": "Kindred",
    "id": 203,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Kindred.png",
    "stats": {
      "hp": 600.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 60.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 3.0
    },
    "traits": [
      "Phantom",
      "Ranger"
    ],
    "ability": {
      "name": "Lamb's Respite",
      "desc": "Kindred creates a zone around themselves for @Duration@ seconds that prevents allies within from dropping below @MinHealth@ health or dying.",
      "icon": "ASSETS/Characters/Kindred/HUD/Icons2D/Kindred_R.png",
      "variables": [
        {
          "key": "Duration",
          "values": [
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0,
            8.0
          ]
        },
        {
          "key": "MinHealth",
          "values": [
            0.0,
            300.0,
            600.0,
            900.0,
            1200.0,
            1500.0,
            1800.0
          ]
        }
      ]
    }
  },
  "222": {
    "name": "Jinx",
    "id": 222,
    "cost": 4,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Jinx.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 0.0,
      "initalMana": 0.0,
      "damage": 75.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 3.0
    },
    "traits": [
      "Hextech",
      "Gunslinger"
    ],
    "ability": {
      "name": "Get Excited!",
      "desc": "Passive: Jinx gets excited as she helps take down enemy units.<br><br>After her first takedown, Jinx gains @PercentAttackSpeed@ bonus Attack Speed.<br><br>After her second takedown, Jinx swaps to her rocket launcher, causing her Basic Attacks to deal @ModifiedDamage@ bonus magic damage to all enemies in a small area around her target.",
      "icon": "ASSETS/Characters/TFT_Jinx/HUD/Icons2D/TFT_Jinx_Spell.TFT_Hextech.png",
      "variables": [
        {
          "key": "HitWindow",
          "values": [
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0
          ]
        },
        {
          "key": "BuffDuration",
          "values": [
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0,
            60.0
          ]
        },
        {
          "key": "AttackSpeedBonus",
          "values": [
            0.4,
            0.6,
            0.8,
            1.0,
            1.2,
            1.4,
            1.6
          ]
        },
        {
          "key": "RocketDamage",
          "values": [
            0.0,
            100.0,
            200.0,
            300.0,
            400.0,
            500.0,
            600.0
          ]
        }
      ]
    }
  },
  "236": {
    "name": "Lucian",
    "id": 236,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Lucian.png",
    "stats": {
      "hp": 600.0,
      "hpScaleFactor": 1.8,
      "mana": 35.0,
      "initalMana": 0.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 3.0
    },
    "traits": [
      "Noble",
      "Gunslinger"
    ],
    "ability": {
      "name": "Relentless Pursuit",
      "desc": "Lucian dashes away from his current target, then Basic Attacks them and fires a second shot which deals @ModifiedDamage@ magic damage.",
      "icon": "ASSETS/Characters/Lucian/HUD/Icons2D/Lucian_E.png",
      "variables": [
        {
          "key": "FirstShotRatio",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        },
        {
          "key": "SecondShotDamage",
          "values": [
            0.0,
            125.0,
            250.0,
            375.0,
            500.0,
            625.0,
            750.0
          ]
        }
      ]
    }
  },
  "238": {
    "name": "Zed",
    "id": 238,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Zed.png",
    "stats": {
      "hp": 550.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.7,
      "range": 1.0
    },
    "traits": [
      "Ninja",
      "Assassin"
    ],
    "ability": {
      "name": "Razor Shuriken",
      "desc": "Zed throws a shuriken in a line, dealing @ModifiedDamage@ magic damage to all enemies in its path.",
      "icon": "ASSETS/Characters/Zed/HUD/Icons2D/shadowninja_Q.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            50.0,
            200.0,
            350.0,
            500.0,
            650.0,
            800.0,
            950.0
          ]
        },
        {
          "key": "HexRange",
          "values": [
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0,
            4.0
          ]
        }
      ]
    }
  },
  "254": {
    "name": "Vi",
    "id": 254,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Vi.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 75.0,
      "damage": 60.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 1.0
    },
    "traits": [
      "Hextech",
      "Brawler"
    ],
    "ability": {
      "name": "Assault and Battery",
      "desc": "Vi charges at the farthest enemy, knocking aside and dealing @ModifiedDamage@ magic damage to all enemies along the way. When she reaches her target, she deals @ModifiedDamage@ magic damage and knocks them up for @CCDuration@ seconds.",
      "icon": "ASSETS/Characters/TFT_Vi/HUD/Icons2D/TFT_ViR.TFT_Hextech.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            100.0,
            300.0,
            500.0,
            700.0,
            900.0,
            1100.0,
            1300.0
          ]
        },
        {
          "key": "CCDuration",
          "values": [
            1.5,
            2.0,
            2.5,
            3.0,
            3.5,
            4.0,
            4.5
          ]
        },
        {
          "key": "MoveSpeed",
          "values": [
            1000.0,
            1000.0,
            1000.0,
            1000.0,
            1000.0,
            1000.0,
            1000.0
          ]
        },
        {
          "key": "OthersCCDuration",
          "values": [
            0.25,
            0.25,
            0.25,
            0.25,
            0.25,
            0.25,
            0.25
          ]
        }
      ]
    }
  },
  "266": {
    "name": "Aatrox",
    "id": 266,
    "cost": 3,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Aatrox.png",
    "stats": {
      "hp": 700.0,
      "hpScaleFactor": 1.8,
      "mana": 75.0,
      "initalMana": 0.0,
      "damage": 65.0,
      "damageScaleFactor": 1.25,
      "armor": 35.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.65,
      "range": 1.0
    },
    "traits": [
      "Demon",
      "Blademaster"
    ],
    "ability": {
      "name": "The Darkin Blade",
      "desc": "Aatrox cleaves the area in front of him, dealing @ModifiedDamage@ magic damage to all enemies within.",
      "icon": "ASSETS/Characters/Aatrox/HUD/Icons2D/Aatrox_Q3.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            0.0,
            300.0,
            600.0,
            900.0,
            1200.0,
            1500.0,
            1800.0
          ]
        }
      ]
    }
  },
  "421": {
    "name": "Rek'Sai",
    "id": 421,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Reksai.png",
    "stats": {
      "hp": 650.0,
      "hpScaleFactor": 1.8,
      "mana": 150.0,
      "initalMana": 50.0,
      "damage": 50.0,
      "damageScaleFactor": 1.25,
      "armor": 20.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Void",
      "Brawler"
    ],
    "ability": {
      "name": "Burrow",
      "desc": "Rek'Sai burrows, becoming untargetable for @BurrowDuration@ second and healing for @ModifiedHeal@ health.<br><br>She emerges at her target, dealing @ModifiedDamage@ magic damage and knocking them up for @KnockupDuration@ seconds.",
      "icon": "ASSETS/Characters/RekSai/HUD/Icons2D/RekSai_W1.png",
      "variables": [
        {
          "key": "HealAmount",
          "values": [
            75.0,
            150.0,
            300.0,
            450.0,
            600.0,
            750.0,
            900.0
          ]
        },
        {
          "key": "BurrowDuration",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        },
        {
          "key": "HealTickRate",
          "values": [
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "key": "KnockupDuration",
          "values": [
            1.75,
            1.75,
            1.75,
            1.75,
            1.75,
            1.75,
            1.75
          ]
        },
        {
          "key": "KnockupDamage",
          "values": [
            50.0,
            200.0,
            350.0,
            500.0,
            650.0,
            800.0,
            950.0
          ]
        }
      ]
    }
  },
  "555": {
    "name": "Pyke",
    "id": 555,
    "cost": 2,
    "splash": "ASSETS/UX/TFT/ChampionSplashes/TFT_Pyke.png",
    "stats": {
      "hp": 600.0,
      "hpScaleFactor": 1.8,
      "mana": 125.0,
      "initalMana": 50.0,
      "damage": 60.0,
      "damageScaleFactor": 1.25,
      "armor": 25.0,
      "magicResist": 20.0,
      "critMultiplier": 1.5,
      "critChance": 0.25,
      "attackSpeed": 0.6,
      "range": 1.0
    },
    "traits": [
      "Pirate",
      "Assassin"
    ],
    "ability": {
      "name": "Phantom Undertow",
      "desc": "Pyke leaves an afterimage at his location, then dashes behind the farthest enemy. After @StunDelay@ second, his afterimage returns to Pyke, dealing @ModifiedDamage@ magic damage to all enemies it passes through and stunning them for @StunDuration@ seconds.",
      "icon": "ASSETS/Characters/Pyke/HUD/Icons2D/PykeE.png",
      "variables": [
        {
          "key": "Damage",
          "values": [
            100.0,
            150.0,
            200.0,
            250.0,
            300.0,
            350.0,
            400.0
          ]
        },
        {
          "key": "StunDuration",
          "values": [
            1.0,
            1.5,
            2.0,
            2.5,
            3.0,
            3.5,
            4.0
          ]
        },
        {
          "key": "StunDelay",
          "values": [
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0
          ]
        }
      ]
    }
  }
}

export default champions;