'use strict';
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const _ = require('lodash'); 
var userSchema =  mongoose.Schema({
    username:{type:String, trim:true,required:true}, 
    password:{type:String,required:true,minlength:8},
    gender:{type:String,required:true},
    location:{type:String,required:true},
    tokens:String,
});

userSchema.methods.generateAuthToken = function () {
    var user=this;
   //console.log('token');
    var token = jwt.sign({_id:user._id.toHexString()},'stoken').toString();
    //console.log(token);
    user.tokens=token;
    console.log(token);
    return user.save().then(()=>{
        return token;
    });
};

 userSchema.pre('save',function(next){
     var user=this;
     if(user.isModified('password')){
         bcrypt.genSalt(5,(err,salt)=>{
             bcrypt.hash(user.password,salt,(err,hash)=>{
                 user.password=hash;
                 next();
             });
         });
     }else{
         next();
     }      
 });




var Wmodel = mongoose.model('Wmodel', userSchema);
module.exports={Wmodel};
