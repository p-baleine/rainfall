
/**
 * Module dependencies.
 */

var express = require("express");

var app = exports = module.exports = express();

// settings
app.set('views', __dirname + '/lib/views');
app.set('view engine', 'jade');

// middleware
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', function(req, res) {
  res.render('index');
});

var port = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port);
}