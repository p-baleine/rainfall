
/**
 * Module dependencies.
 */

var request = require('request'),
    querystring = require('querystring');

/**
 *  Expose `requestRainfall` and `path`.
 */

exports = module.exports = requestRainfall;
exports.path = path;

/**
 * Api url.
 */

var YAHOO_API_URL = exports.YAHOO_API_URL =
      'http://weather.olp.yahooapis.jp';

var YAHOO_APP_ID = process.env.YAHOO_APP_ID;

function requestRainfall(cb) {
  var url = YAHOO_API_URL + path('139.732293,35.663613');

  request(url, function(err, response, body) {
    if (err || response.statusCode !== 200) {
      return cb(new Error());
    }

    try {
      cb(null, JSON.parse(body));
    } catch (e) {
      return cb(e);
    }
  });
}

/**
 * Return path for yahoo api.
 * 
 * @param {String} coordinates
 * @return {String} path
 */

function path(coordinates) {
  return '/v1/place?' + querystring.stringify({
    appid: YAHOO_APP_ID,
    coordinates: coordinates,
    output: 'json'
  });
}

