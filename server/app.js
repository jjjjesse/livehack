const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
  res.json({'error': 'No method exists.'});
});

//Broadcast to channel
//everyone but self.
var broadcastToChannel = function(currentWs, data) {
  wss.clients.forEach(function each(client) {
    if (client !== currentWs && client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

var validateMessage = function(data) {

  try {
    var jsData = JSON.parse(data);
  } catch (e) {
    return false;
  }

  if (! jsData.hasOwnProperty('name') )
    return false;
  if (! jsData.hasOwnProperty('message') )
    return false;

  return true;

};

//When someone connects
wss.on('connection', function connection(ws) {

  //When someone sends a message over a socket.
  ws.on('message', function incoming(data) {

    if ( validateMessage(data) ) {
      broadcastToChannel(ws, data);
    } else {
      console.error('Error parsing json. Ignoring.');
    }

  });

});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
