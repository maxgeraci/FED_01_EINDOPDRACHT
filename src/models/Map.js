import {Model} from 'backbone';

/**
 * Model for the Google Map
 *
 * @constructor
 */
const Map = Model.extend({
    mapLat: 51.83607,
    mapLng: 4.70846,
    zoom: 7,
    markerLat: "",
    markerLng: ""
});

export default Map;