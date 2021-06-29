'use strict';

const events = require('./events.js');



'use strict';

const events = require('../events.js');


// === === // pickup, wait 1 second // === === //
function pickedUp(payload) {
  setTimeout(() => {

    console.log(`🎉 EVENT: pickup`);

    // toISOString returns a string in simplified extended ISO format (source: developer.mozilla.org):
    console.log(`TIME: ${new Date().toISOString()}`);
    console.log(payload);
    console.log(`🚚 DRIVER: picked up ${payload.payload.orderId}`);

    events.emit('in-transit', payload);
  }, 1000);
}


// === === // en route, wait 3 seconds // === === //
function inTransit(payload) {
  setTimeout(() => {

    console.log(`🎉 EVENT: in-transit`);
    console.log(`⌚TIME: ${new Date().toISOString()}`);
    console.log(payload);
    console.log(`🚚 DRIVER: delivered ${payload.payload.orderId}`);

    events.emit('delivered', payload);
  }, 3000);
}



module.exports = () => {
  console.log('beginning drive');
  events.emit('drive');
}