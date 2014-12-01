//jshint node: true
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('superagent');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  var opWindURL = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa&APPID=a65215cff87c4c3fecf0c268ea8943e2';

  request
    .get(opWindURL)
    .end(function (err, opWindData) {
      res.status(500).send('there was an error');
      var jsonData = JSON.parse(opWindData.text);
      var wind = jsonData.wind.speed;

      res.json(wind);
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
