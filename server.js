//jshint node: true
'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.listen(3000);
