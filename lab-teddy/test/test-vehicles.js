'use strict';

const assert = require('assert');
const cars = require('../lib/vehicles.js');
let newSuperCar = new cars.SuperCar('Ferrari', '528', '2015');
let newTruck = new cars.Trucks('Ford', 'Raptor', '2017');
describe('vehicles.js', function(){
  describe('#SuperCar', function(){
    it('should make a string', function(){
      console.log(newSuperCar);
      assert.equal(typeof newSuperCar.make, 'string');
    });
    it('should return an object', function(){
      assert.equal(typeof newSuperCar, 'object');
    });
    console.log(newTruck);
    it('should not return null', function(){
      assert.notEqual(typeof newTruck.make, null);
    });
    it('should not return NaN', function(){
      assert.notEqual(typeof newTruck.make, NaN);
    });
  });
});
