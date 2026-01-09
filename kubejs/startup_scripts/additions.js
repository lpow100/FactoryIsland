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
  event.create('common_mineral_dust')
    .maxStackSize(64)
    .texture('kubejs:item/common_mineral_dust');
  event.create('rare_mineral_dust')
    .maxStackSize(64)
    .texture('kubejs:item/rare_mineral_dust');
});

StartupEvents.registry('fluid', event => {
  event.create('mineral_soup')
    .displayName('Mineral Soup')
    .stillTexture('kubejs:block/still_mineral')
    .flowingTexture('kubejs:block/flowing_mineral')
})

