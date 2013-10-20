
/**
 * Module dependencies.
 */

var express = require("express");

var app = module.exports = express();

// settings

app.set('view engine', 'jade');

// middleware

app.use(express.static(__dirname + '/public'));

// routes

app.use('/', require('./lib/rainfall'));

// listen

var port = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port);
}
