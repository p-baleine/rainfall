
/**
 * Module dependencies.
 */

var expect = require('chai').expect;

exports = module.exports = function() {

  this.World = require('../support/world').World;

  this.Given(/^visit top of rainfall\.$/, function(callback) {
    this.browser.visit('http://localhost:' + this.PORT, callback);
  });

  this.Then(/^Japan area map should be rendered\.$/, function(callback) {
    expect(this.browser.query('svg')).to.exist;
    callback();
  });

};
