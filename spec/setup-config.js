
/**
 * Module dependencies.
 */

var _ = require('underscore'),
    config = require('../lib/config');

exports = module.exports = function() {

  before(function() {
    this.originalConfig = {};
    _.each(require('./fixtures/config'), function(val, key) {
      this.originalConfig[key] = config[key];
      config.__defineGetter__(key, function() { return val; });
    }, this);
  });

  after(function() {
    var self = this;
    _.each(require('./fixtures/config'), function(val, key) {
      config.__defineGetter__(key, function() { return self.originalConfig[key]; });
    });
  });  

};
