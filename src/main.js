import _ from 'underscore';
import {Events} from 'backbone';
import States from './models/States';
import Restaurants from './collections/Restaurants';
import MapView from './views/MapView';
import Map from './models/Map';
import Restaurant from './models/Restaurant';
import ShowRestaurantsButton from './views/ShowRestaurantsButton';
import RestaurantView from './views/RestaurantView';

(function() {
    /**
     * Set global variables for the App
     */
    let setGlobalVariables = () => {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after DOM is ready
     */
    let init = () => {
        setGlobalVariables();

        let statesModel = new States();
        let restaurantsCollection = new Restaurants();
        let mapModel = new Map();
        let restaurantModel = new Restaurant();

        new MapView({el: "#map", model: mapModel});
        new RestaurantView({el: "#restaurants", collection: restaurantsCollection, model: restaurantModel});
        new ShowRestaurantsButton({el: "#showRestaurantsButton", model: mapModel});
    };
    window.addEventListener('load', init);
})();