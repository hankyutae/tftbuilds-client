let traits =
  { "Void": { "desc": "Basic Attacks and Spells from select Void champions deal true damage.<br><br><row>(@MinUnits@) 1 Random Void champion</row><br><row>(@MinUnits@) All Void champions</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Void.png", "name": "Void", "effects": [{ "vars": [{ "name": "PercentArmorPen", "value": 100 }, { "name": "CB42693F", "value": 1 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "PercentArmorPen", "value": 100 }, { "name": "CB42693F", "value": 1 }], "maxUnits": 25000, "minUnits": 4 }], "isOrigin": true }, "Wild": { "desc": "Select allies' Basic Attacks are empowered to grant +@AttackSpeedPercent@% Bonus Attack Speed (stacks up to 5 times).<br><br><row>(@MinUnits@) Wild Allies Only</row><br><row>(@MinUnits@) All Allies, and allies' basic attacks cannot be dodged.</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Wild.png", "name": "Wild", "effects": [{ "vars": [{ "name": "AttackSpeedPercent", "value": 12 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "AttackSpeedPercent", "value": 12 }], "maxUnits": 25000, "minUnits": 4 }], "isOrigin": true }, "Demon": { "desc": "Basic Attacks from Demons have a @ManaDrainProcChance@% chance to reduce their target's Mana by @ManaDrainBurn@ and restore Mana to the Demon.<br><br><expandRow>(@MinUnits@) @ManaDrainDrain@ Mana restored</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Demon.png", "name": "Demon", "effects": [{ "vars": [{ "name": "ManaDrainProcChance", "value": 40 }, { "name": "ManaDrainBurn", "value": 20 }, { "name": "ManaDrainDrain", "value": 15 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "ManaDrainProcChance", "value": 40 }, { "name": "ManaDrainBurn", "value": 20 }, { "name": "ManaDrainDrain", "value": 30 }], "maxUnits": 5, "minUnits": 4 }, { "vars": [{ "name": "ManaDrainProcChance", "value": 40 }, { "name": "ManaDrainBurn", "value": 20 }, { "name": "ManaDrainDrain", "value": 45 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": true }, "Exile": { "desc": "<row>(@MinUnits@) If an Exile has no adjacent allies at the start of combat, they gain a shield equal to @ShieldPercent@% of their maximum Health</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Exile.png", "name": "Exile", "effects": [{ "vars": [{ "name": "ShieldPercent", "value": 100 }], "maxUnits": 25000, "minUnits": 1 }], "isOrigin": true }, "Ninja": { "desc": "Ninjas gain bonus Attack Damage and Spell Power.<br><br>This trait is only active when you have exactly 1 or 4 unique Ninjas.<br><br><row>(@MinUnits@) Ninja gains +@ADValue@ Attack Damage & +@APValue@% Spell Power</row><br><row>(@MinUnits@) All Ninjas gain +@ADValue@ Attack Damage & +@APValue@% Spell Power</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Ninja.png", "name": "Ninja", "effects": [{ "vars": [{ "name": "ADValue", "value": 50 }, { "name": "APValue", "value": 50 }], "maxUnits": 1, "minUnits": 1 }, { "vars": [{ "name": "ADValue", "value": 80 }, { "name": "APValue", "value": 80 }], "maxUnits": 4, "minUnits": 4 }], "isOrigin": true }, "Noble": { "desc": "At the start of combat, select allies gain +@Armor@ Armor, +@MagicResist@ Magic Resistance, and heal @Heal@ Health on-hit.<br><br><row>(@MinUnits@) 1 Random Ally</row><br><row>(@MinUnits@) All Allies</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Noble.png", "name": "Noble", "effects": [{ "vars": [{ "name": "Armor", "value": 50 }, { "name": "Heal", "value": 30 }, { "name": "MagicResist", "value": 50 }], "maxUnits": 5, "minUnits": 3 }, { "vars": [{ "name": "Armor", "value": 50 }, { "name": "Heal", "value": 30 }, { "name": "MagicResist", "value": 50 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": true }, "Robot": { "desc": "(@MinUnits@) Robots start combat at full Mana", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Robot.png", "name": "Robot", "effects": [{ "vars": [], "maxUnits": 25000, "minUnits": 1 }], "isOrigin": true }, "Dragon": { "desc": "<row>(@MinUnits@) Dragons gain @MagicReduction@% resistance to Magic Damage</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Dragon.png", "name": "Dragon", "effects": [{ "vars": [{ "name": "MagicReduction", "value": 75 }], "maxUnits": 25000, "minUnits": 2 }], "isOrigin": true }, "Knight": { "desc": "All allies block a flat amount of damage from all sources.<br><br><expandRow>(@MinUnits@) @BlockAmount@ Damage Blocked</expandRow>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Knight.png", "name": "Knight", "effects": [{ "vars": [{ "name": "BlockAmount", "value": 15 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "BlockAmount", "value": 35 }], "maxUnits": 5, "minUnits": 4 }, { "vars": [{ "name": "BlockAmount", "value": 65 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": false }, "Pirate": { "desc": "<row>(@MinUnits@) At the end of each combat against another player, a treasure chest spawns on your arena containing up to 4 gold</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Pirate.png", "name": "Pirate", "effects": [{ "vars": [], "maxUnits": 25000, "minUnits": 3 }], "isOrigin": true }, "Ranger": { "desc": "Every @ProcRate@ seconds, Rangers have a chance to double their Attack Speed for @ProcRate@ seconds. <br><br><expandRow>(@MinUnits@) @ProcPercent@% Chance to Double Attack Speed</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Ranger.png", "name": "Ranger", "effects": [{ "vars": [{ "name": "ProcPercent", "value": 25 }, { "name": "ASMultiplier", "value": 2 }, { "name": "ProcRate", "value": 3 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "ProcPercent", "value": 70 }, { "name": "ASMultiplier", "value": 2 }, { "name": "ProcRate", "value": 3 }], "maxUnits": 25000, "minUnits": 4 }], "isOrigin": false }, "Yordle": { "desc": "Yordles gain a chance to dodge enemy Basic Attacks.<br><br><expandRow>(@MinUnits@) @MissPercent@% Chance to Dodge</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Yordle.png", "name": "Yordle", "effects": [{ "vars": [{ "name": "MissPercent", "value": 30 }], "maxUnits": 5, "minUnits": 3 }, { "vars": [{ "name": "MissPercent", "value": 60 }], "maxUnits": 8, "minUnits": 6 }, { "vars": [{ "name": "MissPercent", "value": 90 }], "maxUnits": 25000, "minUnits": 9 }], "isOrigin": true }, "Brawler": { "desc": "Brawlers gain bonus Maximum Health.<br><br><expandRow>(@MinUnits@) @BonusHealth@ Bonus Health</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Brawler.png", "name": "Brawler", "effects": [{ "vars": [{ "name": "BonusHealth", "value": 250 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "BonusHealth", "value": 500 }], "maxUnits": 5, "minUnits": 4 }, { "vars": [{ "name": "BonusHealth", "value": 900 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": false }, "Glacial": { "desc": "Basic Attacks from Glacials have a chance to stun their target for @StunDuration@ seconds.<br><br><expandRow>(@MinUnits@) @ProcPercent@% Chance to Stun</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Glacial.png", "name": "Glacial", "effects": [{ "vars": [{ "name": "ProcPercent", "value": 20 }, { "name": "StunDuration", "value": 1.5 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "ProcPercent", "value": 33 }, { "name": "StunDuration", "value": 1.5 }], "maxUnits": 5, "minUnits": 4 }, { "vars": [{ "name": "ProcPercent", "value": 50 }, { "name": "StunDuration", "value": 1.5 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": true }, "Hextech": { "desc": "At the start of combat, an ally Hextech launches and detonates a pulse bomb, temporarily disabling nearby enemy items for @DisableDuration@ seconds.<br><br><row>(@MinUnits@) @HexSize@ Hex Radius</row><br><row>(@MinUnits@) @HexSize@ Hex Radius</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Hextech.png", "name": "Hextech", "effects": [{ "vars": [{ "name": "DisableDuration", "value": 7 }, { "name": "HexSize", "value": 1 }, { "name": "A004F927", "value": 1.25 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "DisableDuration", "value": 7 }, { "name": "HexSize", "value": 2 }, { "name": "A004F927", "value": 1.25 }], "maxUnits": 25000, "minUnits": 4 }], "isOrigin": true }, "Phantom": { "desc": "<row>(@MinUnits@) At the start of combat, a random enemy's Health is set to @HPToSet@</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Phantom.png", "name": "Phantom", "effects": [{ "vars": [{ "name": "HPToSet", "value": 100 }], "maxUnits": 25000, "minUnits": 2 }], "isOrigin": true }, "Assassin": { "desc": "Innate: At the start of combat, Assassins leap to the farthest enemy.<br><br>Assassins gain bonus Critical Strike Damage and Chance.<br><br><expandRow>(@MinUnits@) +@CritAmpPercent@% Critical Strike Damage & +@CritChanceAmpPercent@% Critical Strike Chance</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Assassin.png", "name": "Assassin", "effects": [{ "vars": [{ "name": "CritAmpPercent", "value": 75 }, { "name": "CritChanceAmpPercent", "value": 10 }], "maxUnits": 5, "minUnits": 3 }, { "vars": [{ "name": "CritAmpPercent", "value": 150 }, { "name": "CritChanceAmpPercent", "value": 20 }], "maxUnits": 8, "minUnits": 6 }, { "vars": [{ "name": "CritAmpPercent", "value": 225 }, { "name": "CritChanceAmpPercent", "value": 30 }], "maxUnits": 25000, "minUnits": 9 }], "isOrigin": false }, "Guardian": { "desc": "<row>(@MinUnits@) At the start of combat, Guardians grant +@Armor@ Armor to adjacent allies (this bonus can stack any number of times)</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Guardian.png", "name": "Guardian", "effects": [{ "vars": [{ "name": "Armor", "value": 35 }], "maxUnits": 25000, "minUnits": 2 }], "isOrigin": false }, "Imperial": { "desc": "At the start of combat, select Imperials are empowered to deal double damage.<br><br><row>(@MinUnits@) 1 Random Imperial</row><br><row>(@MinUnits@) All Imperials</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Imperial.png", "name": "Imperial", "effects": [{ "vars": [{ "name": "DamageMultiplier", "value": 2 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "DamageMultiplier", "value": 2 }], "maxUnits": 25000, "minUnits": 4 }], "isOrigin": true }, "Sorcerer": { "desc": "Innate: Sorcerers gain double Mana from Basic Attacks.<br><br>All allies have increased Spell Power.<br><br><expandRow>(@MinUnits@) +@AP@% Spell Power</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Sorcerer.png", "name": "Sorcerer", "effects": [{ "vars": [{ "name": "AP", "value": 40 }], "maxUnits": 5, "minUnits": 3 }, { "vars": [{ "name": "AP", "value": 100 }], "maxUnits": 8, "minUnits": 6 }, { "vars": [{ "name": "AP", "value": 175 }], "maxUnits": 25000, "minUnits": 9 }], "isOrigin": false }, "Gunslinger": { "desc": "Gunslinger Basic Attacks have a @ProcPercent@%  chance to fire additional bullets at other enemies within range.<br><br>These bullets deal damage like Basic Attacks and apply on-hit effects.<br><br><row>(@MinUnits@) Attack @ExtraTargetsHit@ extra enemies</row><br><row>(@MinUnits@) Attack @ExtraTargetsHit@ extra enemies</row><br><row>(@MinUnits@) Attack @ExtraTargetsHit@ extra enemies</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Gunslinger.png", "name": "Gunslinger", "effects": [{ "vars": [{ "name": "ProcPercent", "value": 50 }, { "name": "F768E185", "value": 1 }, { "name": "ExtraTargetsHit", "value": 1 }], "maxUnits": 3, "minUnits": 2 }, { "vars": [{ "name": "ProcPercent", "value": 50 }, { "name": "F768E185", "value": 2 }, { "name": "ExtraTargetsHit", "value": 2 }], "maxUnits": 5, "minUnits": 4 }, { "vars": [{ "name": "ProcPercent", "value": 50 }, { "name": "F768E185", "value": 3 }, { "name": "ExtraTargetsHit", "value": 3 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": false }, "Blademaster": { "desc": "Blademaster Basic Attacks have a @ProcChance@% chance to trigger additional attacks against their target.<br><br>These additional attacks deal damage like Basic Attacks and trigger on-hit effects.<br><br><row>(@MinUnits@) One Additional Attack</row><br><row>(@MinUnits@) Two Additional Attacks</row><br><row>(@MinUnits@) Four Additional Attacks</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Blademaster.png", "name": "Blademaster", "effects": [{ "vars": [{ "name": "ProcChance", "value": 45 }, { "name": "ExtraAttacks", "value": 1 }], "maxUnits": 5, "minUnits": 3 }, { "vars": [{ "name": "ProcChance", "value": 45 }, { "name": "ExtraAttacks", "value": 2 }], "maxUnits": 8, "minUnits": 6 }, { "vars": [{ "name": "ProcChance", "value": 45 }, { "name": "ExtraAttacks", "value": 4 }], "maxUnits": 25000, "minUnits": 9 }], "isOrigin": false }, "Elementalist": { "desc": "Innate: Elementalists gain double mana from Basic Attacks.<br><br><row>(@MinUnits@) At the start of combat, summon a Golem with 2200 Health to fight alongside your allies</row>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Elementalist.png", "name": "Elementalist", "effects": [{ "vars": [{ "name": "HPMultiplier" }, { "name": "558229DF" }, { "name": "SizeCoefficient" }], "maxUnits": 25000, "minUnits": 3 }], "isOrigin": false }, "Shapeshifter": { "desc": "Shapeshifters gain bonus Maximum Health when they transform.<br><br><expandRow>(@MinUnits@) @HPPercent@% Bonus Maximum Health</expandRow><br>", "icon": "ASSETS/UX/TraitIcons/Trait_Icon_Shapeshifter.png", "name": "Shapeshifter", "effects": [{ "vars": [{ "name": "HPPercent", "value": 60 }], "maxUnits": 5, "minUnits": 3 }, { "vars": [{ "name": "HPPercent", "value": 100 }], "maxUnits": 25000, "minUnits": 6 }], "isOrigin": false } };

export default traits;