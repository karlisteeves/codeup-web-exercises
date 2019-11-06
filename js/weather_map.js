"use strict";

var conditions = {
    'clear-day': "icon/Sun.svg",
    'clear-night': "icon/Moon.svg",
    'rain': "icon/Cloud-Drizzle.svg",
    'snow': "icon/Cloud-Snow.svg",
    'sleet': "icon/Cloud-Snow-Alt.svg",
    'wind': "icon/Wind.svg",
    'fog': "icon/Cloud-Fog.svg",
    'cloudy': "icon/Cloud.svg",
    'partly-cloudy-day': "icon/Cloud-Sun.svg",
    'partly-cloudy-night': "icon/Cloud-Moon.svg"
};

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    center: [-98.4916, 29.4252],
    zoom: 5,
    style: 'mapbox://styles/mapbox/satellite-streets-v10'
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

//switch layer function allows you to choose different styles//
function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}



//how to place my marker on the map//
var newMarker = new mapboxgl.Marker();
newMarker.setLngLat([-98.4916, 29.4252]);
newMarker.addTo(map);
newMarker.setDraggable(true);



// instead of making three different functions, iterate through the days with a for each loop and index of i //
function getWeather() {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7432dcc353e65f1a1ddbe0448d1b5477/" + newMarker.getLngLat().lat + "," + newMarker.getLngLat().lng).done(function (data) {
        $('.day').each(function (i) {
            $(this).html("");
            // $(this).append("<img style='height: 50px; width: 50px' alt='' src='" + conditions[data.daily.data[i].icon] + "'>");
            $(this).append("<h2>" + Math.round(data.daily.data[i].temperatureHigh) + "&deg / " + Math.round(data.daily.data[i].temperatureLow) + "&deg</h2>");
            $(this).append("<p>Summary: " + data.daily.data[i].summary +"</p>");
            $(this).append("<p>Precipitation: " + data.daily.data[i].precipType + "</p>");
            $(this).append("<p>Wind: " + data.daily.data[i].windSpeed + "</p>");


        });
    });
}

$('#search').click(function () {
    geocode($('#searchInput').val(), mapboxToken).then(function (result) {
        newMarker.setLngLat(result);

        map.flyTo({center: result, zoom: 5});
        getWeather();
    });
    $('#searchInput').val("");
});

newMarker.on('dragend', getWeather);

getWeather();

