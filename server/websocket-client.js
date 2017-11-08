class WS_Client {

	constructor(serverUri) {
		this.serverUri = serverUri;
		this.socket = false;
		this.emitter = {};
		this.username = false;
	}

	connectToChannel(channel) {
		var uri = `${this.serverUri}/${channel}`;
		this._setupSocket(uri);
	}

	_setupSocket(uri) {
		this.socket = new WebSocket(uri);

		this.socket.onopen = () => {
			this.onSocketOpen();
		};

		this.socket.onerror = (err) => {
			this.onSocketError(err);
		}

		this.socket.onmessage = (message) => {
			this.onSocketMessage(message);
		}
	}

	onSocketOpen() {
		console.log('Socket connection established');
		this.emit('connected');
	}

	onSocketError(error) {
		console.error(`Socket error: ${error}`);
	}

	onSocketMessage(message) {

		try {
			var jsData = JSON.parse(message.data);
		} catch (e) {
			console.error(`Data error: Non-JSON response received`);
			return;
		}

		this.routeMessage(jsData);

	}

	routeMessage(message) {
		if (! message.hasOwnProperty('type') ) {
			console.error('Missing type property in JSON data.');
			return false;
		}

		switch (message.type) {
			case 'broadcast':
				this.emit('broadcast', message);
			break;
		}

	}

	on(identifier, callback) {

		if (! this.emitter.hasOwnProperty(identifier) )
			this.emitter[identifier] = [];

		this.emitter[identifier].push(callback);

	}

	emit(identifier, args = {}) {
		if (! this.emitter.hasOwnProperty(identifier) )
			return;

		for ( var i=0; i<this.emitter[identifier].length; i++ ) {
			this.emitter[identifier][i](args);
		}
	}

	registerUsername(username) {
		this.username = username;
		this.socket.send(JSON.stringify({
	  	'type': 'register',
	    'name': username,
	    'message': ''
	  }));
	}

	sendMessage(message) {
		
		this.socket.send(JSON.stringify({
	  	'type': 'broadcast',
	    'name': this.username,
	    'message': message
	  }));
	}

}

//export { WS_Client }