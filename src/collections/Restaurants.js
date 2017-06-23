import {Collection} from 'backbone';
import Restaurant from '../models/Restaurant';

/**
 * Collection for the Restaurants endpoint
 *
 * @constructor
 */
const Restaurants = Collection.extend({
    model: Restaurant,
    url: 'https://api.foursquare.com/v2/venues/search?client_id=M5A2UPCJOF52YE5V35ZPTAWZEI2GMHXKNTO1EDPU4B33FWSG&client_secret=3ZH4CCIXQYD4WTJVOZS1BPXGRJKE510AFBQZ4CGESVBQJIM0&query=restaurant&v=20170612&m=foursquare&radius=5000'
});

export default Restaurants;