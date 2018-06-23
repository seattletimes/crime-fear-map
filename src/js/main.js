//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");

//get access to Leaflet and the map
var elements = document.querySelectorAll("leaflet-map");
var L = elements[0].leaflet;
var map1 = elements[0].map;
var map2 = elements[1].map;

require('leaflet.sync');
map1.sync(map2);
map2.sync(map1);

map1.scrollWheelZoom.disable();
map2.scrollWheelZoom.disable();
