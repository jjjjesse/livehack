const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080/hacks');
ws.on('open', function open() {

	ws.send(JSON.stringify({
  	'type': 'register',
    'name': 'Richard',
    'message': ''
  }));

  ws.send(JSON.stringify({
  	'type': 'broadcast',
    'name': 'Richard',
    'message': 'This is a test.'
  }));

});

ws.on('message', function incoming(data) {
  console.log('received');
  console.log(data);
});
