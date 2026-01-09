// Example of a more customized item
StartupEvents.registry('item', event => {
  event.create('rough_andesite_alloy')
    .maxStackSize(64)
    .texture('kubejs:item/rough_andesite_alloy'); // Assumes texture is in kubejs/assets/kubejs/textures/item/custom_ingot.png
  event.create('tuff_dust')
    .maxStackSize(64)
    .texture('kubejs:item/tuff_dust'); // Assumes texture is in kubejs/assets/kubejs/textures/item/custom_ingot.png
});
