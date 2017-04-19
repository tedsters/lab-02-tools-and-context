'use strict';

module.exports = exports = {};

exports.Vehicles = function (make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
};

exports.SuperCar = function(make, model, year){
  exports.Vehicles.call(this, make, model, year);
};

exports.Trucks = function(make, model, year){
  exports.Vehicles.apply(this, [make, model, year]);
};
