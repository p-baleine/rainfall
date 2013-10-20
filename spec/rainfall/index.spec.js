
/**
 * Module dependencies.
 */

var chai = require('chai'),
    expect = chai.expect,
    nock = require('nock'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    request = require('supertest');

chai.use(sinonChai);

describe('rainfall', function() {

  beforeEach(function() {
    this.app = require('../../lib/rainfall');
    this.app.set('view engine', 'jade');
  });

  describe('GET /', function() {

    it('should return status code 200', function(done) {
      request(this.app)
        .get('/')
        .expect(200, done);
    });

  });

});