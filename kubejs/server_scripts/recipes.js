

ServerEvents.recipes(event => {
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
    { output: 'minecraft:magma_block', pebble: 'kubejs:superheated_pebble' }
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
    CreateItem.of('minecraft:wheat_seeds', 0.5),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.25), // 0.25 * 0.75
    CreateItem.of('minecraft:flint', 0.10),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.15),     // 0.04 * 0.75
  ], 'minecraft:dirt');

  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.5),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.25), // 0.25 * 0.75
    CreateItem.of('minecraft:flint', 0.10),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.15),     // 0.04 * 0.75
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

  event.recipes.create.mixing([Fluid.of('minecraft:lava',250),'minecraft:netherrack'],'minecraft:magma_block');

  event.blasting('kubejs:superheated_pebble', '#kubejs:pebble');


  event.recipes.create.milling('minecraft:cobbled_deepslate', 'minecraft:deepslate');
  
  event.recipes.create.crushing('minecraft:cobbled_deepslate', 'minecraft:deepslate');


  event.shapeless(Item.of("minecraft:seagrass",3),"minecraft:kelp");
  event.shapeless("kubejs:superheated_pebble","minecraft:coal");

  event.recipes.create.mixing(Item.of('kubejs:blazing_mineral_clump',2),[Fluid.of("kubejs:rare_mineral_soup"),"minecraft:magma_block"]);

  event.recipes.create.milling([
    "minecraft:quartz", Item.of("minecraft:glowstone_dust",2),
    CreateItem.of("minecraft:quartz",0.25),
    CreateItem.of("minecraft:glowstone_dust",0.75),
  ], "kubejs:blazing_mineral_clump");
})