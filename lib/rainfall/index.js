
/**
 * Module dependencies.
 */

var express = require('express'),
    config = require('../config'),
    requestRainfall = require('./request-rainfall');

var app = module.exports = express();

// settings

app.set('views', __dirname);

// middrewares.

app.use(express.errorHandler());

// routes

app.get('/', function(req, res, next) {
  requestRainfall(/* array of latlang,  */function(err, data) {
    // render with `res`.
    if (err) { return next(err); }
    res.render('index', { rainfall: data });
  });
});

// listen

var port = config.PORT;

if (!module.parent) {
  app.listen(port);
}
