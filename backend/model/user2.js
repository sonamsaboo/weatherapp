var mongoose=require('mongoose');
var express= require('express');
var Schema = mongoose.Schema;
const bcrypt=require('bcryptjs');
var userSchema  = new Schema({
    Country: {type:String},
    State: {type:String},
    City:{type:String},
    Date:{type:Date},
    Weather: {type:String},
    Wind: {type:String},
    Humidity:{type:String},
    Data: {
        type: [{
            Time:{type:String},
            Temperature:{ type:String}
        }]
    }
});

var admin = mongoose.model('admin',userSchema);



module.exports={admin};