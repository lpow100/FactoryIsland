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
});

StartupEvents.registry('fluid', event => {
  event.create('mineral_soup')
    .displayName('Mineral Soup')
    .stillTexture('kubejs:block/still_mineral')
    .flowingTexture('kubejs:block/flowing_mineral')
    .bucketColor(0x60686D);
})

