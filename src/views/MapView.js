import {View} from 'backbone';

//Declaring variables
let marker;
let self;
const button = document.getElementById("showRestaurantsButton");

/**
 * Object representing the MapView
 *
 * @Constructor
 */
const MapView = View.extend({

    /**
     * Initialize function
     */
    initialize: function() {
        //Initialize variables
        self = this;
        button.disabled = false;

        // Create a map object and specify the DOM element for display.
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.model.mapLat, lng: this.model.mapLng},
            zoom: this.model.zoom
        });

        /**
         * Click handler for when clicked somewhere on the Google Map
         *
         * @param e
         */
        google.maps.event.addListener(map, 'click', function(e) {
            //Check if a marker has been placed. If no, place a marker. If yes, replace the previous marker with the new coordinates.
            if ( marker ) {
                marker.setPosition(e.latLng);
            } else {
                marker = new google.maps.Marker({
                    position: e.latLng,
                    map: map
                });
            }

            //Set the marker coordinates in the model.
            self.model.set({markerLat: marker.getPosition().lat()});
            self.model.set({markerLng: marker.getPosition().lng()});
        });
    }
});

export default MapView;