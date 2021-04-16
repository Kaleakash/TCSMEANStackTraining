let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
})

let ProductModel = mongoose.model("",ProductSchema,"Product");

module.exports = ProductModel