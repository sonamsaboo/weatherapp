var  { mongoose } = require('./backend/db/config')
var {Wmodel} = require('./backend/model/user');
var express=require('express');
var bodyParser=require('body-parser');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const _=require('lodash');
var app=express();
var {admin} = require('./backend/model/user2');
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers',"Origin,x-auth,X-Requested-With,Content-Type,Accept");
  res.setHeader('Access-Control-Expose-Headers',"x-auth"); 
    next();
});
app.use(bodyParser.json());

//register api
app.post('/register',(req,res) =>{
             var body=_.pick(req.body,['username','password','gender','location']);
             //console.log(body);
                 var newUser = new Wmodel(body);
                 //console.log('id',newUser._id);
                     newUser.save().then(()=>{
                         console.log("cdjbh");
                         return newUser.generateAuthToken();
                     })
                 .then((token)=>{
                     res.header('x-auth',token).send(newUser);        
                 })
                 .catch((error)=>{
                     res.status(404).send(error);
                 });
             });
//login api

              app.post('/login', (req, res) => {
                  
                Wmodel.findOne({'username':req.body.username}).then( (result) => {
             return result.generateAuthToken().then((token)=>{
                 console.log("hie");
                 res.status(200).header('x-auth',token).json({
                     'status':true,
                     'users':result
                 })
             })
             res.send(result);
                    /* if (!result) { return res.status(404).send(); }
                
                    
                        if(result)
                            {
                                //console.log(result);
                                res.status(200).send(result);		
                            }
                        else
                            { res.status(400).send(er); } */
                }).catch( (err) => {
                    res.status(400).send(err);
                });
             
            });

      
	  app.post('/statelogin',(req,res)=>{
        var newusers = new admin({
            Country:req.body.Country,
            State:req.body.State,
            City:req.body.City,
            Date:req.body.Date,
            Weather:req.body.Weather,
            Wind:req.body.Wind,
            Humidity:req.body.Humidity,
            Data: req.body.Data
            
       });
       
       newusers.save().then((result)=>{
           res.status(200).send(result);
        
       }).catch((err)=>{
           res.status(400).send(err);
       });
    });
	app.get('/fetch',(req,res)=> {
    
        admin.findOne().then((result)=>{
            if(!result){
               return res.status(400).send();
            }
            console.log(result);
            res.status(200).send(result);
        }).catch((err)=>{
            res.status(400).send(err);
        });
    });  

	app.delete('/del',(req,res)=> {
        admin.findOneAndRemove().then((result)=>{
            if(!result){
               return res.status(400).send();
            }
            console.log(result);
            res.status(200).send(result);
        }).catch((err)=>{
            res.status(400).send(err);
        });
    });

             let port=process.env.PORT||3000;
const server=app.listen(port,function(){
    console.log("listening to port" +port);
})