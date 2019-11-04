var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var City = new Schema({
    name: String,
    country: String
   });

 module.exports = mongoose.model('cities', City);