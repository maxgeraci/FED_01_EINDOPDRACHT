import {View} from 'backbone';
import Restaurants from '../collections/Restaurants';
import Restaurant from '../models/Restaurant';
import RestaurantView from '../views/RestaurantView';

/**
 * Object representing the ShowRestaurantsButton
 *
 * @Constructor
 */
const ShowRestaurantsButton = View.extend({
    events: {
        'click': 'clickHandler'
    },
    /**
     * Click handler for the $el
     *
     * @param e
     */
    clickHandler: function (e) {
        e.preventDefault();
        this.model.set({buttonClicked: false});
        this.model.set({buttonClicked: true});
        this.getCoordinates();
    },

    /**
     * Get the marker coordinates.
     */
    getCoordinates: function () {
        let restaurant = new Restaurant();
        let restaurants = new Restaurants();
        new RestaurantView({
            el: '#restaurants',
            collection: restaurants,
            models: restaurant,
            urlLat: this.model.get('markerLat'),
            urlLng: this.model.get('markerLng'),
            buttonClicked: true
        });
    }
});

export default ShowRestaurantsButton;