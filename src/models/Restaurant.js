import {Model} from 'backbone';

/**
 * Model for every Restaurant in the collection
 *
 * @constructor
 */
const Restaurant = Model.extend({
    urlLat: "",
    urlLng: "",
    buttonClicked: false
});

export default Restaurant;
