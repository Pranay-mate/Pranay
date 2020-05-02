const express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var cors = require('cors');
const path = require('path');
const app = express();
var await = require('await');
var Promise = require('promise');
const EventEmitter = require('events');


const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

 ////API calls from current ip address
// var database = [];
//app.get("/", (req, res) => {
//  request("http://worldtimeapi.org/api/ip",function (error, response, body) {
//  var data = JSON.parse(body);
//  var zone = data.day_of_week;
//
////  console.log(zone);
//  var z = data.timezone;
////  console.log(z);
//  var time_date = data.datetime;
//  var date = time_date.slice(0,10);
//  var year = date.slice(0,4);
//  var month_num = date.slice(5,7);
//  var day_date = date.slice(8,10);
//
//  var week_day_number= data.day_of_week;
//
////  console.log(week_day_number);
//  switch (week_day_number) {
//  case 0:
//    day = "Sunday";
//    break;
//  case 1:
//    day = "Monday";
//    break;
//  case 2:
//    day = "Tuesday";
//    break;
//  case 3:
//    day = "Wednesday";
//    break;
//  case 4:
//    day = "Thursday";
//    break;
//  case 5:
//    day = "Friday";
//    break;
//  case  6:
//    day = "Saturday";
//      break;
//    default:
//  day = "Unknown Day";
//  };
////  console.log(day);
////    console.log("//////////MONTH//////////");
////      console.log(month_num);
//      var month_number = parseInt(month_num);
//      switch(month_number){
//        case 01: month = "January";
//            break;
//        case 02: month = "February";
//            break;
//        case 03: month = "March";
//            break;
//        case 04: month = "April";
//            break;
//        case 05: month = "May";
//            break;
//        case 06: month = "June";
//            break;
//        case 07: month = "July";
//            break;
//        case 08: month = "August";
//            break;
//            default:
//      month = "Unknown Day";
//        };
////        console.log(month);
////      console.log("////////TIME/////////");
//        var time= time_date.slice(11,19);
//        var hrs= time.slice(0,2);
//        var min = time.slice(3,5);
//        var sec = time.slice(6,9);
//
//        //
//        var db = {
//          location : z,
//          hours :hrs,
//          minutes: min,
//          seconds : sec,
//          dbDate: date,
//          dbMonth: month,
//          dbyear : year,
//          dbDay : day,
//          dbDayDate : day_date
//        };
//
//
//        database.push(db);
//      //  console.log(db);
//
//        ////
//        //
//        console.log("1st part working");
//
//
//  res.send(db);
//});
//
//});
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////////
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.setMaxListeners(500);
app.get("/", (req, res) => {
myEmitter.on('event', _ => console.log(i));
  var zone_list =["Asia/Kolkata", "Asia/Shanghai", "Australia/Adelaide", "America/New_York", "America/Los_Angeles"];
  length= zone_list.length;
for (var i = 0; i < length; i++)
  {
var database = [];

request("http://worldtimeapi.org/api/timezone/"+ zone_list[i],function (error, response, body) {

var data = JSON.parse(body);
var z = data.timezone;
//console.log(z);
var time_date = data.datetime;
//console.log("////////TIME/////////");
var time= time_date.slice(11,19);
var hrs= time.slice(0,2);
var min = time.slice(3,5);
var sec = time.slice(6,9);
var db = {
  location : z,
  hours :hrs,
  minutes: min,
  seconds : sec
};

database.push(db);
//console.log(database);
   var len = database.length;
//  console.log(len);
if (len>4){
//  console.log(database);

  res.send(database);

}
});
};
myEmitter.emit('event');
});
/////database.push(db);
///////console.log(database);
/////   var len = database.length;
///////  console.log(len);
/////if (len>9){
///////  console.log(database);
/////  res.send(database);
/////}





app.listen(port, () => console.log(`Listening on port ${port}`));
//console.log("////////////////////////////////////////////////////");
//   var len = database.length;
//  console.log(len);
//if (len<11){
//  console.log("success");
//}else{
//  console.log("unsuc");
//}
//var l = 11;
//});

//
//console.log("//////////////////////////////SOUTH_AUSTRALIA_ADELIDE-//////////////////////////");
//console.log("//////////////////////////////AMERICA_NEW_YORK-//////////////////////////");
//console.log("//////////////////////////////AMERICA  LONDON//////////////////////////");
//console.log("//////////////////////////////AMERICA LOS ANGELOS-//////////////////////////");
//console.log("//////////////////////////////AMERICA CHICAGO//////////////////////////");
//console.log("/////////////////////////////EUROP LUXEMBORG//////////////////////////");
//console.log("//////////////////////////////SPAIN/////////////////////////");
//console.log("//////////////////////////////EUROP  ROME//////////////////////////");
//console.log("//////////////////////////////EUROP PARIS//////////////////////////");
//console.log("//////////////////////////////ASIA SCHINGHAE CHINA//////////////////////////");
//console.log("//////////////////////////////EUROPE LONDON//////////////////////////");
//console.log("//////////////////////////////ASIA SINGAPUR//////////////////////////");
/////"Asia/Kolkata", "Asia/Shanghai", "Australia/Adelaide", "America/New_York", "America/Los_Angeles", "Asia/Shanghai", "Europe/Luxembourg", "Europe/Paris", "Europe/London", "Asia/Singapore"
