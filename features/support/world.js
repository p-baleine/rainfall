
/**
 * Module dependencies.
 */

var Zombie = require("zombie");

// Expose `World`.

exports.World = World;

/**
 * World constructor.
 * 
 * @param {Function} callback
 */

function World(callback) {
  this.browser = new Zombie();
  this.app = require('../../app');
  this.server = null;
  callback();
}

/**
 * port.
 */

World.prototype.PORT= 3333;

/**
 * Boot server.
 * 
 * @param {Function} callback
 */

World.prototype.bootServer = function(callback) {
  this.server = this.app.listen(this.PORT);
  callback();
};

