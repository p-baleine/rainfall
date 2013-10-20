
/**
 * Module dependencies.
 */

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('test', function() {
  it('2 + 2', function() {
    expect(2 + 2).to.equal(4);
  });
});

