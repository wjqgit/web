 var express = require('express'),
	app = express(),
	server = require('http').Server(app),
	io = require('socket.io')(server);

io.on('connection', function (socket) {
	console.log('A user connected...');

	socket.on('test', function(msgObj) {
    console.log('Message received @ %d', Date.now());
    var msgObj = {};
    msgObj.time = Date.now();
		socket.emit('test', msgObj);
	});
})


server.listen(9002, function () {
	console.log('Server running on port: 9002');
});
