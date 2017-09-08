var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const models = require("./models");
const port = process.env.PORT || 8000;

let items;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) { 
    console.log("GOT TO new home");
    res.json("JJTESTING")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})