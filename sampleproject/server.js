var express = require('express');
var path = require("path");
var fs = require("fs");
var router = require('express').Router();
var bodyParser = require('body-parser');
var mongo = require("mongoose");
//Replace the link below by mLab link
var db = mongo.connect("mongodb://localhost:27017/stockmarket_flipr", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4202');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema({
  id: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  
  
  
}, {
  versionKey: false
});


var model = mongo.model('users', UsersSchema, 'users');
//var model1 = mongo.model(findOne({ name :req.body.name,password:req.body.password})._id, UsersSchema, 'users');

app.post("/api/SaveUser", function (req, res) {
  if (req.body.mode == "Save"){
    model.findOne({email:req.body.email}, function (err,data) {
      if (err) {
      console.log('error');
      res.send({data:'Error'});
  }
    else if(data === null) {
    var mod = new model(req.body);
    mod.save(function (err, data) {
        if (err) {
          res.send(err);
    }   else {
          res.send({data:"Registered successfully"});
    }
  });
  
  }
  else{
    res.send({data:"Registered already"});
  }

})}});
 



app.post("/api/LoginUser", function (req, res) {
  model.findById({
    _id: req.body.id
  }, function (err,data) {
    console.log(req.body.id);
    if (err) {
      res.send(err);
    }
    else if (data === null){
      res.send({data:"No"});
    }
    else{
      res.send({data:"LoggedIn successful"});
    }
  });
})



app.get("/api/getUser", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})


app.listen(8090, function () {

  console.log('Example app listening on port 8090!')
})