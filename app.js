//jshint esversion:6

const express =require("express");
const path = require("path");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function( req , res){
  res.sendFile(__dirname+"signup/sign.html");
});
app.post("/",function( req, res){
  var First_Name=req.body.name;
  var Last_Name=req.body.name;
  var Age=req.body.age;
  var R1=req.body.Gender;
  var R2=req.body.Gender;
  var email = req.body.email;
  var psw=req.body.body.psw;
  var pswrepeat=req.body.pswrepeat;
  console.log(First_Name,Last_Name,Age,R1,R2,email,psw,psw-repeat);
});
app.listen(3000,function(){
  console.log("server 3000......");
});
