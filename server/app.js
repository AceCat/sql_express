var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var server = require('http').createServer(app);
var router = express.Router();


var port = process.env.PORT || 3000

var db = require ('./queries.js');

app.use(cors());


app.use('/csvUpload', db.importCSV);
app.use('/csvView', db.CSVtoJSON);
app.use('/forecastUpload', db.importForecastCSV);
app.use('/forecastView', db.forecastCSVtoJSON);

server.listen(port, function () {

	console.log("listening on port " + port);
})

module.exports = router;
