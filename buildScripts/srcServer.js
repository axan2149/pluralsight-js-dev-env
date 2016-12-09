/**
 * Created by axan on 12/8/2016.
 */
var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000;
var app=express();

app.get("/", function (req, res) {
  res.send("Hello");

});


app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open("http://localhost:"+port);
  }

});
