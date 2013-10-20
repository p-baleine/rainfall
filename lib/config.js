
/**
 * Module dependencies.
 */

var _ = require("underscore");

var config = {

  /**
   * port
   */

  PORT: process.env.PORT || 3000,

  /**
   * Yahoo application id.
   */

  YAHOO_APP_ID: process.env.YAHOO_APP_ID,

  /**
   * Yahoo application secret.
   */

  YAHOO_APP_SECRET: process.env.YAHOO_APP_SECRET,

  /**
   * Yahoo Api end point.
   */

  YAHOO_API_URL: 'http://weather.olp.yahooapis.jp'

};

_.each(config, function(val, key) {
  exports.__defineGetter__(key, function() { return val; });
});
