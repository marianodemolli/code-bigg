var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItinerarySchema = new Schema({

    city: {type: mongoose.Schema.Types.ObjectId, ref: 'cities'}, 
    
    title: {
        type: String
    },
    profilePic: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    },
    hashtag: {
        type: Array
    }}
);
module.exports = Itinerary = mongoose.model("itinerary",ItinerarySchema);