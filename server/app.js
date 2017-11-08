const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

var channels = {};
var users = {};

app.get('/', (req, res) => {
  res.json({'error': 'No method exists.'});
});

//Broadcast to channel
//everyone but self.
var broadcastToChannel = function(guid, channel, currentWs, data) {
  console.log(`Broadcast: ${data}`);
  if (! users.hasOwnProperty(guid) ) {
    console.log('User guid is not registered.');
    return false;
  }
  if ( users[guid].nickname === false ) {
    users[guid].socket.send(JSON.stringify({
      'type': 'error',
      'name': 'system',
      'message': 'You must register before broadcasting.'
    }));
    return false;
  }

  if (! channels.hasOwnProperty(channel) ) {
    users[guid].socket.send(JSON.stringify({
      'type': 'error',
      'name': 'system',
      'message': 'Unknown channel.'
    }));
    return false; 
  }

  for ( var key in channels[channel].users ) {
    if (! users.hasOwnProperty(key) )
      continue;

    let socket = users[key].socket;

    //Don't broadcast to self.
    if ( socket === currentWs )
      continue;
    
    try {
      socket.send(data);
    } catch (e) {
      //Remove?
      console.log('Client must have left');
      removeUser(guid, channel);
    }
  }

  users[guid].socket.send(JSON.stringify({
    'type': 'ack',
    'name': 'system',
    'message': ''
  }));

};

var removeUser = (guid, channel) => {

  if ( channels.hasOwnProperty(channel) ) {
    if ( channels[channel].users.hasOwnProperty(guid) ) {
      delete channels[channel].users[guid];
      console.log('Removed ' + guid + ' from channel ' + channel);
    }
  }

  if ( users.hasOwnProperty(guid) ) {
    delete users[guid];
    console.log('Removed ' + guid + ' from users');
  }

};

var addUserToList = (guid, socket) => {
  if (! users.hasOwnProperty(guid) ) {
    users[guid] = {
      guid: guid,
      nickname: false,
      socket: socket
    };
    console.log('Add user ' + guid + ' to users list');
  }
};

var addUserToChannel = (guid, channel) => {

  if (! channels.hasOwnProperty(channel) ) {
    channels[channel] = {
      'name': channel,
      'users': {}
    };
    console.log('Created channel ' + channel);
  }

  if (! channels[channel].users.hasOwnProperty(guid) ) {
    channels[channel].users[guid] = {
      guid: guid
    };
    console.log('Added user ' + guid + ' to channel ' + channel);
  }

};

var registerUser = (guid, data) => {

  try {
    var jsData = JSON.parse(data);
  } catch (e) {
    return false;
  }

  if (! users.hasOwnProperty(guid) ) {
    console.log('Cannot register user that isnt in userlist.');
    return false;
  }

  users[guid].nickname = jsData.name;
  console.log('Registered User ' + jsData.name);

};

var validateMessage = function(guid, data) {

  if (! users.hasOwnProperty(guid) ) {
    console.log('validateMessage detected an invalid user');
    return false;
  } 

  try {
    var jsData = JSON.parse(data);
  } catch (e) {
    return false;
  }

  if (! jsData.hasOwnProperty('type') )
    return false;
  if (! jsData.hasOwnProperty('name') )
    return false;
  if (! jsData.hasOwnProperty('message') )
    return false;

  return jsData;

};

//When someone connects
wss.on('connection', function connection(ws, req) {

  const location = url.parse(req.url, true);

  //Ensure only websockets are opened for channels.
  if ( location.path === '/' ) {  
    ws.send(JSON.stringify({
      type: 'error',
      name: 'system',
      message: 'No channel selected'
    }), () => {
      ws.close();  
    });
    return;
  }

  const guid = generateGuid();
  const channel = location.path;
  addUserToList(guid, ws);
  addUserToChannel(guid, channel);

  //When someone sends a message over a socket.
  ws.on('message', function incoming(data) {

    var jsData = validateMessage(guid, data);
    if ( jsData ) {
      switch ( jsData.type ) {
        case 'broadcast':
          broadcastToChannel(guid, channel, ws, data);
        break;
        case 'register':
          registerUser(guid, data);
        break;
        default:
          console.log('Unknown type');
        break;
      }
    } else {
      console.error('Error parsing json. Ignoring.');
    }

  });

  ws.on('close', () => {
    removeUser(guid, channel);
  });

});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});

var generateGuid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};