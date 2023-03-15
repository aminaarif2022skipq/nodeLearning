const EventEmitter = require('events');
const eventLog = require('./logEvent');
class MyEmitter  extends EventEmitter {}

const myEmitter = new MyEmitter();
//register an event
myEmitter.on('log',(message) => {
    eventLog(message);
})

//emit the event
myEmitter.emit('log','event logged')