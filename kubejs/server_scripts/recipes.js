

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
    { output: 'minecraft:netherrack', pebble: 'havenpebbles:netherrack_pebble' }
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


  event.shapeless('kubejs:rough_andesite_alloy', [
      '2x minecraft:andesite',
      '2x minecraft:coal'
  ])


  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.5),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.25), // 0.25 * 0.75
    CreateItem.of('minecraft:flint', 0.10),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.15),     // 0.04 * 0.75
  ], 'minecraft:dirt')

  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.5),     // 0.3 * 0.75
    CreateItem.of('supplementaries:flax_seeds', 0.25), // 0.25 * 0.75
    CreateItem.of('minecraft:flint', 0.10),   // 0.1 * 0.75
    CreateItem.of('minecraft:pumpkin_seeds', 0.15),     // 0.04 * 0.75
  ], 'minecraft:grass_block')

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
})