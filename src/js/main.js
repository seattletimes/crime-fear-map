//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");

//get access to Leaflet and the map
var elements = Array.prototype.slice.call(document.querySelectorAll("leaflet-map"));
var L = elements[0].leaflet;
var maps = elements.map(e => e.map)

// Sync maps
require('leaflet.sync');
maps.forEach((map, i) => {
  // Sync map with other
  map.sync(maps[(i + 1) % 2]);

  map.scrollWheelZoom.disable();

  // Add labels
  var topLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    opacity: 0.8,
    pane: "markerPane",
  }).addTo(map);
});
