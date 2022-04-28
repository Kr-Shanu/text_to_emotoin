const bodyParser = require("body-parser");
const express = require("express");
const ejs = require('ejs');
const app = express();
const https = require('https');
const axios = require("axios")



// setting up the folder public to fetch the static files.
app.use(express.static("public"));

app.set('view engine', 'ejs');

// setting up bodyparser to take input from the user.
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    res.render("index");

});



// Post request to the home route
app.post("/", function (req, res) {



    // The content provided by the user
    const content = req.body.content;
    console.log(content);


    // website : https://api.apilayer.com/text_to_emotion



    const options = {
        url: 'https://apis.paralleldots.com/v4/emotion',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:{
            "api_key": '',
            "text": ["hello"],
            "lang_code": "en"
        },  
    };

    axios(options)
        .then(response => console.log(response))

    // const https = require('https');


    // req = https.request(options, res => {
    //     console.log(`statusCode: ${res.statusCode}`);
    //     console.log("req sent")
    // });

    // req.on('error', error => {
    //     console.error(error);
    // });

    // req.end();



});









// listening the site on port 3000
app.listen(3000, function () {
    console.log("Server started on port 3000.");
});