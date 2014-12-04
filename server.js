var PeerServer = require('peer').PeerServer;
var Express = require('express');
var Topics = require('./public/src/Topics.js');
var app = Express();
var port = process.env.PORT || 3000;

app.use(Express.static(__dirname + '/public'));

var expressServer = app.listen(port);
var io = require('socket.io').listen(expressServer);

console.log('listening on port: ', port);

var peerServer = new PeerServer({port: 9000, path: '/chat'});

peerServer.on('connection', function(id) {
  io.emit(Topics.USER_CONNECTED, id);
  console.log('connected with user id: ', id);
});

peerServer.on('disconnect', function(id) {
  io.emit(Topics.USER_DISCONNECTED, id);
  console.log('disconnected with user id: ', id);
});