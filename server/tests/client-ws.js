const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');
ws.on('open', function open() {
  ws.send(JSON.stringify({
    'name': 'Richard',
    'message': 'This is a test.'
  }));
});

ws.on('message', function incoming(data) {
  console.log('received');
  console.log(data);
});
