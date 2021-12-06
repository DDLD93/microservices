
var mongoose = require('mongoose');
//Get the default connection
var db = mongoose.connect("mongodb://mongo:27017/authentication");

module.exports = {db};
