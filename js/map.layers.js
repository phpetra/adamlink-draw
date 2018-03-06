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
var omnibus1839 = L.tileLayer('https://mapwarper.net/maps/tile/28781/{z}/{x}/{y}.png', {
    'opacity': 0.7,
    maxZoom: 20,
    maxNativeZoom: 19
});
var saa = L.tileLayer.wms('http://geoserver.memorix.nl/geoserver/ams/wms', {
    layers: 'ams:ad374037-970f-8a67-6110-a45da204162a',
    format: 'image/png',
    crs: L.CRS.EPSG4326,
    transparent: false,
    version: '1.1.1',
    zIndex: 1,
    opacity: 0.7,
    attribution: '&copy; <a href="http://beeldbank.amsterdam.nl/beeldbank/weergave/record/?id=KOKA00649000002">Beeldbank Stadsarchief</a>'
});

var baseMaps = {
    "Open street map": osm,
    "Carto": cartodb
};

var overlayMaps = {
    "Omnibus kaart 1839": omnibus1839,
    "Paardentram Amsterdam 1900": tram1900,
    "Gemeentetram Amsterdam 1911": tram1911,
    "Gemeente-Tram 1928-1940": saa
};
