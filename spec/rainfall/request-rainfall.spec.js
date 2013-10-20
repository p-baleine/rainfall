
/**
 * Module dependencies.
 */

var chai = require('chai'),
    expect = chai.expect,
    nock = require('nock'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    requestRainfall = require('../../lib/rainfall/request-rainfall');

describe('request-rainfall', function() {

  it('should be a function', function() {
    expect(requestRainfall).to.be.a('function');
  });

  it('should return result via passed callback', function(done) {
    requestRainfall(done);
  });

  describe('path()', function() {

    it('should specify `json` as default output format', function() {
      expect(requestRainfall.path('12,34')).to.match(/output=json/);
    });

    it('should specify `appid` from environment var', function() {
      expect(requestRainfall.path('12,34').match(/appid=([^&]+)/)[1])
        .to.equal(process.env.YAHOO_APP_ID);
    });

  });

  describe('request spec', function() {

    describe('when request is success', function() {

      beforeEach(function() {
        this.scope = nock(requestRainfall.YAHOO_API_URL)
          .get(requestRainfall.path('139.732293,35.663613'))
          .reply(200, { hello: 'world' });
      });

      it('should request to yahoo api', function(done) {
        requestRainfall(function(err, data) {
          expect(this.scope.isDone()).to.be.ok;
          done(err);
        }.bind(this));
      });

    });

    describe('when error is occurred', function() {

      beforeEach(function() {
        this.scope = nock(requestRainfall.YAHOO_API_URL)
          .get(requestRainfall.path('139.732293,35.663613'))
          .reply(500);
      });

      it('should return with err', function(done) {
        requestRainfall(function(err, data) {
          expect(err).to.be.exist;
          done();
        });
      });

    });

  });

});

