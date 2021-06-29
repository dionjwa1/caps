'use strict';

const vendors = require('../models/vendors.js');
const events = require('./events/events.js');
const handleDrivers = require('./models/drivers.js');
const handleVendors = require('./models/vendors.js');

events.on('sweat', handleDrivers);
events.on('sunglasses', handleVendors);

const randomCustomer = new vendors.Vendor();

setInterval(() => {
  
    events.emit('order', { order: randomCustomer });
  }, 5000);