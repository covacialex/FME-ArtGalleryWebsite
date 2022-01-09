"use strict";

const layer = new L.StamenTileLayer("toner");
const map = new L.Map("map", {
  center: new L.LatLng(41.4805, -71.31108),
  zoom: 16,
});
map.addLayer(layer);

const locationIcon = L.icon({
  iconUrl: "assets/icon-location.svg",

  iconSize: [50, 70], // size of the icon
  // shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

L.marker([41.4805, -71.31108], { icon: locationIcon }).addTo(map);
