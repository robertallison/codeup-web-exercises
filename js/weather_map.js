$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: 30,
    lon: 43,
    units: "imperial"
})
.done(function (data) {
    console.log(data)
})



mapboxgl.accessToken = mapboxApiKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9.7,
    center: [-96.79107, 32.766540],
    dragRotate: true
});
