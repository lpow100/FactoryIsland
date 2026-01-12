

ServerEvents.recipes(event => {

  ///////////////////////////////////////////////////////////////////
  // Chapter 1
  ///////////////////////////////////////////////////////////////////  

  // Stone types from pebbles
  const recipes = [
    { output: 'minecraft:cobblestone', pebble: 'havenpebbles:stone_pebble' },
    { output: 'minecraft:basalt', pebble: 'havenpebbles:basalt_pebble' },
    { output: 'minecraft:granite', pebble: 'havenpebbles:granite_pebble' },
    { output: 'minecraft:cobbled_deepslate', pebble: 'havenpebbles:deepslate_pebble' },
    { output: 'minecraft:diorite', pebble: 'havenpebbles:diorite_pebble' },
    { output: 'minecraft:blackstone', pebble: 'havenpebbles:blackstone_pebble' },
    { output: 'minecraft:tuff', pebble: 'havenpebbles:tuff_pebble' },
    { output: 'minecraft:calcite', pebble: 'havenpebbles:calcite_pebble' },
    { output: 'minecraft:andesite', pebble: 'havenpebbles:andesite_pebble' },
    { output: 'minecraft:dripstone_block', pebble: 'havenpebbles:dripstone_pebble' },
    { output: 'minecraft:netherrack', pebble: 'havenpebbles:netherrack_pebble' },
    // Chapter 2
    { output: 'minecraft:magma_block', pebble: 'kubejs:superheated_pebble' },
    // Chapter 4
    { output: 'minecraft:end_stone', pebble: 'kubejs:ender_dust' }
  ];

  recipes.forEach(recipe => {
    event.shaped(
      Item.of(recipe.output, 1),
      [
        'PP',
        'PP'
      ],
      {
        P: recipe.pebble
      }
    );
  });

  event.shapeless(
    Item.of("minecraft:pointed_dripstone", 4),
    [
        "minecraft:dripstone_block"
    ]
  )

  event.recipes.create.milling([
		CreateItem.of('create:crushed_raw_iron', 0.1),
		CreateItem.of('create:crushed_raw_copper', 0.15),
		CreateItem.of('minecraft:coal', 0.15)
	], 'havenpebbles:tuff_pebble')

  event.recipes.create.milling([
		CreateItem.of('create:crushed_raw_iron', 0.2),
		CreateItem.of('create:crushed_raw_copper', 0.3),
		CreateItem.of('minecraft:coal', 0.3)
	], 'minecraft:tuff')

  event.recipes.create.crushing([
		CreateItem.of('create:crushed_raw_iron', 0.1),
		CreateItem.of('create:crushed_raw_copper', 0.15),
		CreateItem.of('minecraft:coal', 0.15)
	], 'havenpebbles:tuff_pebble')

  event.recipes.create.crushing([
		CreateItem.of('create:crushed_raw_iron', 0.2),
		CreateItem.of('create:crushed_raw_copper', 0.3),
		CreateItem.of('minecraft:coal', 0.3)
	], 'minecraft:tuff')

  event.remove({id: 'create:crushing/tuff_recycling'});
  event.remove({id: 'createadditions:crushing/tuff_recycling'});
  event.remove({id: 'createadditions:crushing/tuff'});

  event.shaped('kubejs:rough_andesite_alloy', [
      'AC',
      'CA'
  ], {
    A: 'minecraft:andesite',
    C: 'minecraft:charcoal'
  })

  event.shaped('kubejs:rough_andesite_alloy', [
      'AC',
      'CA'
  ], {
    A: 'minecraft:andesite',
    C: 'minecraft:coal'
  })


  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.45),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.25), // 0.25 * 0.75
    CreateItem.of('minecraft:melon_seeds', 0.15),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.15),     // 0.04 * 0.75
  ], 'minecraft:dirt');

  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.45),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.25), // 0.25 * 0.75
    CreateItem.of('minecraft:melon_seeds', 0.15),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.15),     // 0.04 * 0.75
  ], 'minecraft:grass_block');

  event.recipes.create.crushing([
    CreateItem.of('minecraft:wheat_seeds', 0.40),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.20), // 0.25 * 0.75
    CreateItem.of('minecraft:melon_seeds', 0.10),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.10),     // 0.04 * 0.75
    CreateItem.of("minecraft:beetroot_seeds",0.10),
    CreateItem.of("minecraft:cocoa_beans",0.10),
  ], 'minecraft:dirt');

  event.recipes.create.crushing([
    CreateItem.of('minecraft:wheat_seeds', 0.40),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.20), // 0.25 * 0.75
    CreateItem.of('minecraft:melon_seeds', 0.10),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.10),     // 0.04 * 0.75
    CreateItem.of("minecraft:beetroot_seeds",0.10),
    CreateItem.of("minecraft:cocoa_beans",0.10),
  ], 'minecraft:grass_block');

  event.shaped('create:millstone', [
      ' R ',
      'RPR',
      'SSS'
  ], {
      S: '#c:stones',
      R: 'kubejs:rough_andesite_alloy',
      P: '#minecraft:planks'
  })

  event.shaped('create:hand_crank', [
      'PPP',
      '  R'
  ], {
      P: '#minecraft:planks',
      R: 'kubejs:rough_andesite_alloy'
  })

  ///////////////////////////////////////////////////////////////////
  // Chapter 2
  ///////////////////////////////////////////////////////////////////  

  event.recipes.create.compacting(Fluid.of("minecraft:water",250),Ingredient.of("#minecraft:leaves",4));
  event.recipes.create.milling("minecraft:dirt","minecraft:coarse_dirt");

  event.remove({id: 'create:milling/gravel'});
  event.recipes.create.milling("minecraft:sand","minecraft:gravel");

  event.recipes.create.splashing('kubejs:geode','minecraft:tuff');

  event.recipes.create.milling([
		CreateItem.of('create:crushed_raw_iron', 0.45),
		CreateItem.of('create:crushed_raw_zinc', 0.35),
		CreateItem.of('create:crushed_raw_copper', 0.55),
		CreateItem.of('create:crushed_raw_gold', 0.35),
	], 'kubejs:geode')
  
  event.recipes.create.crushing([
		CreateItem.of('create:crushed_raw_iron', 0.45),
		CreateItem.of('create:crushed_raw_zinc', 0.35),
		CreateItem.of('create:crushed_raw_copper', 0.55),
		CreateItem.of('create:crushed_raw_gold', 0.35),
	], 'kubejs:geode')

  event.recipes.create.mixing([Fluid.of('minecraft:lava',250),'minecraft:netherrack'],'minecraft:magma_block');

  event.blasting('kubejs:superheated_pebble', '#kubejs:pebble');


  event.recipes.create.milling('minecraft:cobbled_deepslate', 'minecraft:deepslate');
  
  event.recipes.create.crushing('minecraft:cobbled_deepslate', 'minecraft:deepslate');


  event.shapeless(Item.of("minecraft:seagrass",3),"minecraft:kelp");
  event.shapeless("kubejs:superheated_pebble","minecraft:coal");

  event.recipes.create.milling("minecraft:soul_sand","minecraft:blackstone");
  event.recipes.create.crushing("minecraft:soul_sand","minecraft:blackstone");

  event.recipes.create.pressing([Item.of("minecraft:amethyst_shard",2),CreateItem.of("minecraft:amethyst_shard",0.75)],"kubejs:geode");

  event.recipes.create.mixing([CreateItem.of("minecraft:cactus",0.5),CreateItem.of("minecraft:sugar_cane",0.5)],[Fluid.of("minecraft:water"),"minecraft:sand"]);

  ///////////////////////////////////////////////////////////////////
  // Chapter 3
  ///////////////////////////////////////////////////////////////////

  event.recipes.create.mixing(Fluid.of("kubejs:mineral_soup",1000),"kubejs:geode").heated();

  event.recipes.create.mixing(Item.of("minecraft:tuff",2),[Item.of("minecraft:cobblestone",6),Fluid.of("kubejs:mineral_soup")]);
  event.recipes.create.mixing(
    [CreateItem.of("minecraft:torchflower_seeds",0.5),CreateItem.of("minecraft:pitcher_pod",0.5)],
    [Item.of("minecraft:dirt",1),Fluid.of("kubejs:mineral_soup")]
  );
  
  event.recipes.create.mixing(Fluid.of("kubejs:rare_mineral_soup",1000),[
    Fluid.of("kubejs:mineral_soup",1000),
    Item.of("minecraft:cobbled_deepslate",4)
  ]).heated();

  event.recipes.create.milling(Item.of("kubejs:dust",4),Ingredient.of("#chipped:sand"));
  event.recipes.create.filling('kubejs:rare_mineral_dust',[Fluid.of('kubejs:rare_mineral_soup',500),"kubejs:dust"]);

  event.recipes.create.mixing('kubejs:rare_mineral_clump',Fluid.of('kubejs:rare_mineral_soup',1000));

  event.recipes.create.milling([
    CreateItem.of("minecraft:diamond",0.3),
    CreateItem.of("minecraft:redstone",0.2),
    CreateItem.of("minecraft:emerald",0.15),
    CreateItem.of("minecraft:lapis_lazuli",0.35)
  ], 'kubejs:rare_mineral_clump')

  event.recipes.create.crushing([
    CreateItem.of("minecraft:diamond",0.3),
    CreateItem.of("minecraft:redstone",0.2),
    CreateItem.of("minecraft:emerald",0.15),
    CreateItem.of("minecraft:lapis_lazuli",0.35)
  ], 'kubejs:rare_mineral_clump')

  event.recipes.create.compacting(Fluid.of("create_enchantment_industry:experience",250),"minecraft:lapis_lazuli");

  event.recipes.create.filling("minecraft:budding_amethyst",[Fluid.of("create_enchantment_industry:experience",1000),"minecraft:amethyst_block"]);
  
  event.recipes.create.mixing(Item.of('kubejs:blazing_mineral_clump',2),[Fluid.of("kubejs:rare_mineral_soup"),"minecraft:magma_block"]);
  
  event.recipes.create.milling([
    "minecraft:quartz", Item.of("minecraft:glowstone_dust",2),
    CreateItem.of("minecraft:quartz",0.25),
    CreateItem.of("minecraft:glowstone_dust",0.75),
  ], "kubejs:blazing_mineral_clump");

  event.recipes.create.crushing([
    "minecraft:quartz", Item.of("minecraft:glowstone_dust",2),
    CreateItem.of("minecraft:quartz",0.25),
    CreateItem.of("minecraft:glowstone_dust",0.75),
  ], "kubejs:blazing_mineral_clump");

  const netherite_transitional = 'kubejs:incomplete_netherite_scrap' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of("minecraft:netherite_scrap",0.45),
        CreateItem.of("minecraft:ancient_debris",0.20),
        CreateItem.of("kubejs:rare_mineral_dust",0.10),
        CreateItem.of("minecraft:basalt",0.2),
        CreateItem.of("minecraft:lava_bucket",0.05)
      ],
      // Input:
      'minecraft:basalt',
      // Sequence:
      [
        event.recipes.create.deploying(netherite_transitional,[netherite_transitional,"kubejs:rare_mineral_dust"]),
        event.recipes.create.filling(netherite_transitional,[netherite_transitional,Fluid.of("minecraft:lava")]),
        event.recipes.create.pressing(netherite_transitional,netherite_transitional)
      ]
    )
    .transitionalItem(netherite_transitional) // Set the transitional item

  const soul_netherite_transitional = 'kubejs:incomplete_soul_netherite_scrap' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of("minecraft:netherite_scrap",0.50),
        CreateItem.of("minecraft:ancient_debris",0.25),
        CreateItem.of("kubejs:rare_mineral_dust",0.07),
        CreateItem.of("minecraft:basalt",0.17),
        CreateItem.of("minecraft:lava_bucket",0.01)
      ],
      // Input:
      'minecraft:basalt',
      // Sequence:
      [
        event.recipes.create.deploying(soul_netherite_transitional,[soul_netherite_transitional,"minecraft:soul_sand"]),
        event.recipes.create.deploying(soul_netherite_transitional,[soul_netherite_transitional,"kubejs:rare_mineral_dust"]),
        event.recipes.create.filling(soul_netherite_transitional,[soul_netherite_transitional,Fluid.of("minecraft:lava")]),
        event.recipes.create.pressing(soul_netherite_transitional,soul_netherite_transitional)
      ]
    )
    .transitionalItem(soul_netherite_transitional) // Set the transitional item

  event.recipes.create.mixing("kubejs:ender_dust",["minecraft:glowstone_dust","kubejs:rare_mineral_dust"]).superheated()
  
  ///////////////////////////////////////////////////////////////////
  // Deep Dark
  ///////////////////////////////////////////////////////////////////

  event.recipes.create.filling("minecraft:sculk",[Fluid.of("create_enchantment_industry:experience",500),"minecraft:stone"]);

  event.recipes.create.pressing(Item.of("minecraft:sculk_vein",4),"minecraft:sculk");

  event.shaped("minecraft:sculk_sensor",[
    'RTR',
    'SSS',
  ], {
    R: "minecraft:redstone_torch",
    S: "minecraft:sculk",
    T: "minecraft:string"
  });

  event.recipes.create.haunting("minecraft:sculk_shrieker","minecraft:sculk_sensor");
  
  event.recipes.create.filling("minecraft:sculk_catalyst",[Fluid.of("create_enchantment_industry:experience",500),"minecraft:sculk_shrieker"]);

  event.recipes.create.pressing("minecraft:echo_shard","minecraft:sculk_catalyst");

  ///////////////////////////////////////////////////////////////////
  // Chapter 4
  ///////////////////////////////////////////////////////////////////

  event.recipes.create.mixing(
    ["minecraft:chorus_fruit",CreateItem.of("minecraft:chorus_flower",0.5)],
    [Fluid.of("mechanical_botany:void_compost",250),"kubejs:ender_dust"]
  );

  event.recipes.create.splashing("minecraft:ender_pearl","kubejs:ender_dust");
  
  event.recipes.create.mixing(Fluid.of("kubejs:enderian_essence",500),[
    Fluid.of("create_enchantment_industry:experience"),
    "minecraft:ender_pearl"
  ]).superheated();

  event.recipes.create.filling("kubejs:enderian_ore",[Fluid.of("kubejs:enderian_essence"),"minecraft:end_stone"]);

  event.recipes.create.crushing([
    Item.of("kubejs:ender_dust",2),
    CreateItem.of("kubejs:ender_dust",0.5),
    CreateItem.of("create:experience_nugget",0.2)
  ],"kubejs:enderian_ore");

  event.recipes.create.filling("kubejs:enderian_shard",[Fluid.of("kubejs:enderian_essence"),"minecraft:echo_shard"]);

  const transitional = 'kubejs:incomplete_ender_portal_frame' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of("minecraft:end_portal_frame", 0.5),
        CreateItem.of("kubejs:ender_dust",0.15),
        CreateItem.of("kubejs:enderian_shard",0.12),
        CreateItem.of("minecraft:end_stone",0.15),
        CreateItem.of("create_enchantment_industry:super_experience_block",0.08)
      ],
      // Input:
      'minecraft:end_stone',
      // Sequence:
      [
        event.recipes.create.deploying(transitional,[transitional,"create_enchantment_industry:super_experience_block"]),
        event.recipes.create.deploying(transitional,[transitional,"kubejs:enderian_shard"]),
        event.recipes.create.filling(transitional,[transitional,Fluid.of("kubejs:enderian_essence")]),
        event.recipes.create.pressing(transitional,transitional)
      ]
    )
    .transitionalItem(transitional) // Set the transitional item

  
  ///////////////////////////////////////////////////////////////////
  // Iron Furnaces
  ///////////////////////////////////////////////////////////////////

  event.replaceInput(
    { id: 'ironfurances:rainbow_plating' },
    'ironfurances:silver_furnace',         
    'minecraft:furnace'
  )

  ///////////////////////////////////////////////////////////////////
  // Chapter 5
  ///////////////////////////////////////////////////////////////////

  event.shaped('kubejs:imatation_dragon_head', [
    '  S',
    'S S',
    'SSS'
  ], {
    S: "minecraft:shulker_shell"
  });

  event.recipes.create.mixing("minecraft:dragon_head", ["kubejs:imatation_dragon_head","kubejs:enderian_shard",Fluid.of("create_dragons_plus:dragon_breath")])

  event.recipes.create.mechanical_crafting("minecraft:elytra", [
    ' SES ',
    'SS SS',
    'PS SP',
    'PP PP',
    'P   P'
  ], {
    P: "minecraft:phantom_membrane",
    E: "kubejs:enderian_shard",
    S: "minecraft:shulker_shell"
  })

})