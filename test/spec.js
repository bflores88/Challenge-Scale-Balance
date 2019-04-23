// write tests here
'use strict';

const scaleBalance = require('../index.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Scale Balance', function(){

  it('should be a function', function(){
    scaleBalance.should.be.a('function')
  })

  it('should return a string', function(){
    scaleBalance(["[5, 9]", "[1, 2, 6, 7]"]).should.be.a('string')
  })

  it('should check a single weight on either side - check left', function(){
    scaleBalance(["[5, 6]", "[1, 3, 5, 6]"]).should.equal('1')
  })

  it('should check a single weight on either side - check right', function(){
    scaleBalance(["[6, 5]", "[1, 3, 5, 6]"]).should.equal('1')
  })

  it('should be able to add two weights to one side - check left', function(){
    scaleBalance(["[5, 9]", "[0, 1, 3, 6]"]).should.equal('1,3')
  })

  it('should be able to add two weights to one side - check right', function(){
    scaleBalance(["[9, 5]", "[0, 1, 3, 6]"]).should.equal('1,3')
  })

  it('should return a unique solution', function(){
    scaleBalance(["[5, 9]", "[1, 2, 6, 7]"]).should.equal('2,6')
  })

  it('should return not possible if no solution is found', function(){
    scaleBalance(["[5, 9]", "[0, 3, 6]"]).should.equal('not possible')
  })

});