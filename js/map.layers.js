/* Defautlt layers available for the  map */

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var cartodb = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

/** historical maps */
var tram1900 = L.tileLayer('https://mapwarper.net/maps/tile/28390/{z}/{x}/{y}.png', {
    'opacity': 0.7,
    maxZoom: 20,
    maxNativeZoom: 19
});
var tram1911 = L.tileLayer('https://mapwarper.net/maps/tile/28385/{z}/{x}/{y}.png', {
    'opacity': 0.7,
    maxZoom: 20,
    maxNativeZoom: 19
});

var baseMaps = {
    "Open street map": osm,
    "Carto": cartodb
};

var overlayMaps = {
    "Paardentram Amsterdam 1900": tram1900,
    "Gemeentetram Amsterdam 1911": tram1911

};