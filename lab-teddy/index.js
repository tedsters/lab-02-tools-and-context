'use strict';
const cars = require('./lib/vehicles.js');
console.log(cars.SuperCar);
console.log(new cars.SuperCar('Ferrari', '528', '2015'));
console.log(new cars.Trucks('Chevy', 'Silverado', '2017'));
