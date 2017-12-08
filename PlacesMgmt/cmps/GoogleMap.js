'use strict';
// import PlaceServices from '../services/PlaceService.js'

export default {
    template: `
    <div class="google-map" :id="mapName"></div>
    `,
    name: 'google-map',
    props: ['name'],
    data: function () {
        return {
            mapName: this.name + "-map",
            markerCoordinates: [{
                latitude: 51.501527,
                longitude: -0.1921837
            }, {
                latitude: 51.505874,
                longitude: -0.1838486
            }, {
                latitude: 51.4998973,
                longitude: -0.202432
            }],
            map: null,
            bounds: null,
            markers: [],
            infoWindow: null,
            // service: null,
        }
    },
    mounted: function () {
        this.bounds = new google.maps.LatLngBounds();
        const element = document.getElementById(this.mapName)
        const mapCentre = this.markerCoordinates[0]
        const options = {
            center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
            styles: [{
                stylers: [{ visibility: 'simplified' }]
              }, {
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }]
        }
        this.map = new google.maps.Map(element, options);
        this.infoWindow = new google.maps.InfoWindow();
        // this.service = new google.maps.places.PlacesService(example-map);
        // this.map.addListener('idle', performSearch)

        // function performSearch() {
        //     var request = {
        //       bounds: this.map.getBounds(),
        //       keyword: 'best view'
        //     };
        //     service.radarSearch(request, callback);
        //   }

        //   function callback(results, status) {
        //     if (status !== google.maps.places.PlacesServiceStatus.OK) {
        //       console.error(status);
        //       return;
        //     }
        //     for (var i = 0, result; result = results[i]; i++) {
        //       addMarker(result);
        //     }
        //   }

          function addMarker(place) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              icon: {
                url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
                anchor: new google.maps.Point(10, 10),
                scaledSize: new google.maps.Size(10, 17)
              }
            });

            google.maps.event.addListener(marker, 'click', function() {
                service.getDetails(place, function(result, status) {
                  if (status !== google.maps.places.PlacesServiceStatus.OK) {
                    console.error(status);
                    return;
                  }
                  infoWindow.setContent(result.name);
                  infoWindow.open(map, marker);
                });
              });
            }

        this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            var markerIcon = {
                url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0), // used if icon is a part of sprite, indicates image position in sprite
                anchor: new google.maps.Point(20,40) // lets offset the marker image
              };
            const marker = new google.maps.Marker({
                icon: markerIcon,  
                animation: google.maps.Animation.DROP,                
                position,
                map: this.map
            });
            this.markers.push(marker)
            this.map.fitBounds(this.bounds.extend(position))
        });
    }
}
