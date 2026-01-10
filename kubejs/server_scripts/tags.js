ServerEvents.tags('item', event => {
  const pebbles = ['tuff','stone','dripstone','andesite','calcite','diorite','granite','deepslate','basalt','netherrack','blackstone']
  pebbles.forEach(element => {
    event.add('kubejs:pebble',`havenpebbles:${element}_pebble`);
  });
});