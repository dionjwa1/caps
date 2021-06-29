'use strict';

const events = require('../events/events.js');
require('../models/drivers.js');
require('../models/vendors.js');

events.on('order', (payLoad) => {
console.log(payLoad);
// events.emit('order', payLoad)
});

events.on('delivered', (payLoad) => {
  console.log(payLoad);
  // events.emit('delivered', payLoad)
  });

  events.on('in-transit', (payLoad) => {
    console.log(payLoad);
    // events.emit('in-transit', payLoad)
    });

