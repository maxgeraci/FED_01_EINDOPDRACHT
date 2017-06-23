import {View} from 'backbone';

//Declare variables
let url;
let fullUrl;
let restaurants = [];
let name;
let address;

/**
 * Object representing the RestaurantView
 *
 * @Constructor
 */
const RestaurantView = View.extend({

    /**
     * Initialize function
     */
    initialize: function(attributes) {
        //Initialize variables
        url = this.collection.url;
        this.options = attributes;

        //Check if the button has been clicked.
        if (this.options.buttonClicked) {
            //Load the restaurants
            this.loadRestaurants();
        }
    },


    /**
     * Load the restaurants function
     */
    loadRestaurants: function () {
        //Initialize variables
        fullUrl = url +"&ll="+this.options.urlLat+","+this.options.urlLng;
        this.collection.url = fullUrl;

        //Fetch the collection
        this.collection.fetch({
            success: (collection) =>
                this.loadRestaurantsSuccessHandler(collection),
            error: (collection, response) =>
                this.loadRestaurantsErrorHandler(collection, response)
        });
    },

    /**
     * Success Handler will add HTML of restaurants to this $el
     *
     * @param collection
     */
    loadRestaurantsSuccessHandler: function (collection) {
        //Initialize variables
        restaurants = [];

        //Loop through the API data.
        for (let i = 0; i < collection.models[0].attributes.response.venues.length; i++) {
            //Initialize variables
            name = collection.models[0].attributes.response.venues[i].name;
            if (collection.models[0].attributes.response.venues[i].location.address == undefined) {
                address = "No address"
            } else {
                address = collection.models[0].attributes.response.venues[i].location.address;
            }

            //Add data to the restaurants array.
            restaurants.push("<li class='restaurant'>" + name +
                "<br><p id='address' '>Address: " + address +
                "</p></li>");
        }

        //Check if the array is empty.
        if (restaurants.length == 0) {
            restaurants.push("<p>No restaurants found in this area...</p>")
        }

        //Add restaurants to this $el.
        this.$el.html(
            "<p>" +
                restaurants.join("") +
                "</p>"
        )
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadRestaurantsErrorHandler: function (collection, response)
    {
        //Add error message to this $el
        this.$el.html(
            "<p>" +
                response.responseJSON.error +
            "</p>"
        );
    }
});

export default RestaurantView;