// event - 모르겠음.
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('ellie', (args) => {
  console.log('first callback - ', args);
});

emitter.emit('ellie', { message: 1 });
emitter.emit('ellie', { message: 2 });
emitter.emit('ellie', { message: 3 });
