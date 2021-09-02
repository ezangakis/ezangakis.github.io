/* Create the map */
var mymap = L.map('mapid').setView([39.9526, -75.1652], 6);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXphbmciLCJhIjoiY2prYmZ4MWRmMHdpeTNxdDRobzlzdzhqYiJ9.gH8NQVABBFmrMzf4IVX5fQ'
}).addTo(mymap);
/*
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom:18,
   	id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZXphbmciLCJhIjoiY2prYmZ4MWRmMHdpeTNxdDRobzlzdzhqYiJ9.gH8NQVABBFmrMzf4IVX5fQ'
}).addTo(mymap);
*/
/* Define icon class */
var LeafIcon = L.Icon.extend({
    options: {
        //shadowUrl: 'shadow.png',
        iconSize:     [35,65],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

/* Define custom icons */
var templeIcon = new LeafIcon({iconUrl: 'images/2_TempleLogo.png'});
var templeMarker=L.marker([39.981243, -75.155453],{icon: templeIcon}).addTo(mymap).bindPopup("Temple University");

var poconosIcon = new LeafIcon({iconUrl: 'images/PoconosLogo.png'});
var poconosMarker=L.marker([41.042216, -75.307387],{icon: poconosIcon}).addTo(mymap).bindPopup("The Poconos!");


function goToTemple(){
    mymap.setView([39.981243, -75.155453], 15);
    templeMarker.openPopup();
}

function goToNos(){
    mymap.setView([41.042216, -75.307387], 15);
    poconosMarker.openPopup();
}
