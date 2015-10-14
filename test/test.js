var http = require('http'),
	io = require('socket.io-client');

var socket = io.connect('http://localhost:9002');

var sendTime;

socket.on('connect', function () {
	console.log('Connected to server!');
});


socket.on('test', function (receiveTime) {
	var receiveTime = Date.now();
	console.log('Delay %d', (receiveTime - sendTime));
});

function test() {
	sendTime = Date.now();
	console.log('Send @ %d', sendTime);
	socket.emit('test', sendTime);
}

for(var i = 0; i < 10; i++) {
	setTimeout(test, i * 1000);
}