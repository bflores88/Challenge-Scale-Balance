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

  it('should return a unique solution', function(){
    scaleBalance(["[5, 9]", "[1, 2, 6, 7]"]).should.equal('2,6')
  })

  it('should return not possible if no solution is found', function(){
    scaleBalance(["[5, 9]", "[0, 3, 6]"]).should.equal('not possible')
  })


});