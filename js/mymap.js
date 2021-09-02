/* Create the map */
var mymap = L.map('mapid').setView([39.9526, -75.1652], 6);
	
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom:18,
   	id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(mymap);

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
