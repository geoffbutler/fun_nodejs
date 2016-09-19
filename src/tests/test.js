var chai = require('chai');

var expect = chai.expect;
var app = require('../index.js');

describe('app', function() {

  it('returnTrue() should return true', function() {
    expect(app.returnTrue()).to.equal(true);
  });

  it('returnFalse() should return false', function() {
    expect(app.returnFalse()).to.equal(false);
  });

});

