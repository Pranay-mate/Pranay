const express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sign.html");
});


app.post("/", function(req, res) {
  var fname=req.body.fname;
  var lname=req.body.lname;
  var email=req.body.email;
  console.log(fname);
  console.log(lname);
  console.log(email);

  var data={
    members:[
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  };
  var jsondata= JSON.stringify(data);

  var options ={
    url: "https://us4.api.mailchimp.com/3.0/lists/63ba286610",
    method: "POST",
    headers:{
      "Authorization": "Pranay, 795129e5243d76fc08d1909c87f1b762-us4"
    },
 body: jsondata
  };
  request(options, function (error, response, body) {
    if (error) {
      res.sendFile(__dirname+ "/failure.html");

    }else{
      if (response.statusCode === 200) {
        res.sendFile(__dirname+ "/sucess.html");
      }else{
          res.sendFile(__dirname+ "/failure.html");
      }
    }
  });

});

     app.post("/failure", function(req, res){
       res.redirect("/");
     });

app.listen(process.env.PORT);
//795129e5243d76fc08d1909c87f1b762-us4    apikey
