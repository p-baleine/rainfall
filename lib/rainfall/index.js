
/**
 * Module dependencies.
 */

var express = require('express'),
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

var port = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port);
}
