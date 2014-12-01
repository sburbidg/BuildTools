'use strict';
var expect = require('chai').expect;
var some_func = require('../../app/js/some_func');

describe('some test', function() {
  it('should be true', function(done) {
    expect(true).to.eql(true);
    done();
  });

  // it('should also be true', function() {
  //   expect(some_func()).to.be.true;
  // });
});
