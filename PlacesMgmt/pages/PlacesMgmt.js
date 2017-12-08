'use strict';
import PlaceServices from '../services/PlaceService.js'

export default {
    template: `
    <h1>Places home page</h1>
    <div :id="mapName" class="google-map"></div>
    `,
    name: 'google-map',
    props: ['name'],
    data:function () {
        return {
            mapName: this.name + '-map',
        }
    },
    methods:{
        
    },
    created() {
        PlaceServices.showLocation() 
    },
    components: {
    },
    mounted: function () {
        const element = document.getElementById(this.mapName)
        const options = {
          zoom: 14,
          center: new google.maps.LatLng(51.501527,-0.1921837)
        }
        const map = new google.maps.Map(element, options);
      }
};
