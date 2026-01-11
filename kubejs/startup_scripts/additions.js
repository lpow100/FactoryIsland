// Example of a more customized item
StartupEvents.registry('item', event => {
  event.create('rough_andesite_alloy')
    .maxStackSize(64)
    .texture('kubejs:item/rough_andesite_alloy');
  event.create('superheated_pebble')
    .maxStackSize(64)
    .texture('kubejs:item/superheated_pebble');
  event.create('geode')
    .maxStackSize(64)
    .texture('kubejs:item/geode');
  event.create('rare_mineral_dust')
    .maxStackSize(64)
    .texture('kubejs:item/rare_mineral_dust');
  event.create('rare_mineral_clump')
    .maxStackSize(64)
    .texture('kubejs:item/rare_minerals');
  event.create('blazing_mineral_clump')
    .maxStackSize(64)
    .texture('kubejs:item/blazing_mineral_clump');
  event.create('ender_dust')
    .maxStackSize(64)
    .texture('kubejs:item/ender_dust');
  event.create('enderian_shard')
    .maxStackSize(64)
    .texture('kubejs:item/enderian_shard');
});

StartupEvents.registry('fluid', event => {
  event.create('mineral_soup')
    .displayName('Mineral Soup')
    .stillTexture('kubejs:block/still_mineral')
    .flowingTexture('kubejs:block/flowing_mineral')
    .noBlock() 
  event.create('rare_mineral_soup')
    .displayName('Rare Mineral Soup')
    .stillTexture('kubejs:block/still_rare_mineral')
    .flowingTexture('kubejs:block/flowing_rare_mineral')
    .noBlock() 
  event.create('enderian_essence')
    .displayName('Enderian Essence')
    .stillTexture('kubejs:block/enderian_essence')
    .flowingTexture('kubejs:block/enderian_essence')
    .noBlock() 
})

StartupEvents.registry('block', event => {
  event.create('enderian_ore')
    .displayName('Enderian Ore')
    .stoneSoundType()
    .hardness(3)
    .resistance(3)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
})
