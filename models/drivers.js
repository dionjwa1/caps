'use strict';

const events = require('../events/events.js');


// === === // pickup, wait 1 second // === === //
function pickedUp(payload) {
  setTimeout(() => {

    console.log(`EVENT: pickup`);

    // toISOString returns a string in simplified extended ISO format (source: developer.mozilla.org):
    console.log(`TIME: ${new Date().toISOString()}`);
    console.log(payload);
    console.log(`DRIVER: picked up ${payload.orderId}`);

    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(() => {

    console.log(`EVENT: in-transit`);
    console.log(`IME: ${new Date().toISOString()}`);
    console.log(payload);
    console.log(`DRIVER: delivered ${payload.orderId}`);

    events.emit('delivered', payload);
  }, 3000);
}

events.on('delivered', (payLoad) => {
  console.log('Thank You', payLoad.customerName);
});
events.on('order', pickedUp) 

// module.exports = () => {
//   console.log('beginning drive');
//   events.emit('drive');
// }