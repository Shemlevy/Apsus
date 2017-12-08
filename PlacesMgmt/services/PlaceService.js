
'use strict';

//function ask for user position
function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return
    }
    // One shot position getting or continus watch
    // navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

//get postion from user and show it on map
function showLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");
    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
};

// initMap with lat and lng, onload to Saint-Louis-du-Ha! Ha!,
function initMap(lat, lng) {
    if (!lat) lat = 47.667133;
    if (!lng) lng = -68.980006;

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: { lat: lat, lng: lng },
            zoom: 18
        }
    )
    var markerIcon = {
        url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
        scaledSize: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0), 
        anchor: new google.maps.Point(20,40) 
      };

    var marker = new google.maps.Marker({
        icon: markerIcon,  
        animation: google.maps.Animation.DROP,        
        position: { lat: lat, lng: lng },
        map: map,
        title: 'Hello World!'
    })
    showAddress(lat, lng)
    getWeather(lat, lng)
}

//show the address of the pick location
function showAddress(lat, lng) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBMPwmpKGkNozJfQ2zrVZdvlvJDv7QsZrM`)
        .then(res => {
            document.querySelector('.show-address').innerText = res.data.results[0].formatted_address;
        })
};

//function get address from  user and initMap to 
function getGeoByAddress(e) {
    e.preventDefault();
    var add = document.querySelector('.user-input').value;
    var get = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyBMPwmpKGkNozJfQ2zrVZdvlvJDv7QsZrM`)
        .then(res => {
            var lat = res.data.results[0].geometry.location.lat;
            var lng = res.data.results[0].geometry.location.lng;
            initMap(lat, lng);
        })
};

//function get weather by lat and lan
function getWeather(lat, lng) {
    console.log('lat',lat,'lng',lng);
    var get = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=055b571e17934a98944e7e0006b43031`)
    .then(res => {
       console.log(res);
    })
}

// export default {
//     getWeather,
//     getGeoByAddress,
//     showAddress,
//     initMap,
//     handleLocationError,
//     showLocation,
//     getPosition
// }