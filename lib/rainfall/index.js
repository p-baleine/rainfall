
/**
 * Module dependencies.
 */

var express = require("express");

var app = module.exports = express();

// settings

app.set('views', __dirname);

// routes

app.get('/', function(req, res) {
  res.render('index');
});

// listen

var port = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port);
}
