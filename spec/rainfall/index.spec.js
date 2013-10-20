
/**
 * Module dependencies.
 */

var chai = require('chai'),
    expect = chai.expect,
    nock = require('nock'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    request = require('supertest'),
    config = require('../../lib/config'),
    setupConfig = require('../setup-config'),
    requestRainfall = require('../../lib/rainfall/request-rainfall');

chai.use(sinonChai);

describe('rainfall', function() {

  setupConfig();

  beforeEach(function() {
    this.app = require('../../lib/rainfall');
    this.app.set('view engine', 'jade');
    this.scope = nock(config.YAHOO_API_URL)
      .get(requestRainfall.path('139.732293,35.663613'))
      .reply(200, { hello: 'world' });
  });

  describe('GET /', function() {

    it('should return status code 200', function(done) {
      request(this.app)
        .get('/')
        .expect(200, done);
    });

  });

});