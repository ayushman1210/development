const eventemitter=require('events');
const { EventEmitter } = require('stream');

const myfirstemitter= new EventEmitter();

myfirstemitter.on('greet',(name)=>{
    console.log(`${name}`);

})

myfirstemitter.emit('greet', "ayushmanr");