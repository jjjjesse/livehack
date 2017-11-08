class WS_Client {

	constructor(serverUri) {
		this.serverUri = serverUri;
		this.socket = false;
		this._setupSocket();
		this.emitter = {};
	}

	_setupSocket() {
		this.socket = new WebSocket(this.serverUri);

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
	}

	onSocketError(error) {
		console.error(`Socket error: ${error}`);
	}

	onSocketMessage(message) {

		try {
			var jsData = JSON.parse(message);
		} catch (e) {
			console.error(`Data error: Non-JSON response received`);
			return;
		}

		this.routeMessage(message);

	}

	routeMessage(message) {

		//If message type is chat...
		//this.emit('message')

		//Else something else?
		//this.emit('error')

	}

	on(identifier, callback) {

		if (! this.emitter.hasOwnProperty(identifier) )
			this.emitter[identifier] = [];

		this.emitter[identifier].push(callback);

	}

	emit(identifier, args = {}) {
		if (! this.emitter.hasOwnProperty[identifier] )
			return;

		for ( var i=0; i<this.emitter[identifier].length; i++ ) {
			this.emitter[identifier][i](args);
		}
	}


}

export { WS_Client }