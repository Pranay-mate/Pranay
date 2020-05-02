const express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var cors = require('cors');
const path = require('path');
const app = express();



const port =  5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var API = "http://worldtimeapi.org/api/timezone/";

app.get("/", (req, res) => {

  request(API,function (error, response, body) {
    var data = JSON.parse(body);

  res.send(data);
  });
});


app.get("/india", function(req, res) {
  request("http://worldtimeapi.org/api/timezone/Asia/Kolkata",function (error, response, body) {
  var world = JSON.parse(body);
    var zone = world.timezone;
  //  console.log(zone);
    var time_date = world.datetime;
    var date = time_date.slice(0,10);
    var year = date.slice(0,4);
    var month_num = date.slice(5,7);
    var day_date = date.slice(8,10);

    var week_day_number= world.day_of_week;
      switch (week_day_number) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
          break;
        default:
      day = "Unknown Day";
      };

  ////      console.log("//////////MONTH//////////");

          var month_number = parseInt(month_num);
          switch(month_number){
            case 01: month = "January";
                break;
            case 02: month = "February";
                break;
            case 03: month = "March";
                break;
            case 04: month = "April";
                break;
            case 05: month = "May";
                break;
            case 06: month = "June";
                break;
            case 07: month = "July";
                break;
            case 08: month = "August";
                break;
                default:
          month = "Unknown Day";
            };

        //  console.log("////////TIME/////////");
                var time= time_date.slice(11,19);
                var hrs= time.slice(0,2);
                var min = time.slice(3,5);
                var sec = time.slice(6,9);

                var india = {
                  location : zone,
                  hours :hrs,
                  minutes: min,
                  seconds : sec,
                  dbDate: date,
                  dbMonth: month,
                  dbyear : year,
                  dbDay : day,
                  dbDayDate : day_date
                };

  res.send(india);
  });
});


app.post("/", function(req, res) {
  var location = req.body.selected.value;

  request(API+location,function (error, response, body) {
  var world = JSON.parse(body);
    var zone = world.timezone;
  //  console.log(zone);
    var time_date = world.datetime;
    var date = time_date.slice(0,10);
    var year = date.slice(0,4);
    var month_num = date.slice(5,7);
    var day_date = date.slice(8,10);

    var week_day_number= world.day_of_week;
      switch (week_day_number) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
          break;
        default:
      day = "Unknown Day";
      };

  ////      console.log("//////////MONTH//////////");

          var month_number = parseInt(month_num);
          switch(month_number){
            case 01: month = "January";
                break;
            case 02: month = "February";
                break;
            case 03: month = "March";
                break;
            case 04: month = "April";
                break;
            case 05: month = "May";
                break;
            case 06: month = "June";
                break;
            case 07: month = "July";
                break;
            case 08: month = "August";
                break;
                default:
          month = "Unknown Day";
            };

        //  console.log("////////TIME/////////");
                var time= time_date.slice(11,19);
                var hrs= time.slice(0,2);
                var min = time.slice(3,5);
                var sec = time.slice(6,9);

                var db = {
                  location : zone,
                  hours :hrs,
                  minutes: min,
                  seconds : sec,
                  dbDate: date,
                  dbMonth: month,
                  dbyear : year,
                  dbDay : day,
                  dbDayDate : day_date
                };

  res.send(db);
  });

});
app.listen(port,console.log("hosted on port:"+port));
