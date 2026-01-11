ServerEvents.tags('item', event => {
  const pebbles = ['tuff','stone','dripstone','andesite','calcite','diorite','granite','deepslate'];
  pebbles.forEach(element => {
    event.add('kubejs:pebble',`havenpebbles:${element}_pebble`);
  });
  
  const rare_mineral_ores = ['diamond','redstone','lapis_lazuli','emerald'];
  rare_mineral_ores.forEach(element => {
    event.add('kubejs:rare_mineral_ore',`minecraft:${element}`);
  });

  
  const netherrack_pebbles = ['netherrack','blackstone','basalt'];
  netherrack_pebbles.forEach(element => {
    event.add('kubejs:netherrack_pebbles',`havenpebbles:${element}_pebble`);
  });
});