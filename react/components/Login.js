import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const Login = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>

        <ReactBootstrap.Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Login
        </ReactBootstrap.Button>

        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close}>
          <ReactBootstrap.Modal.Header closeButton>
            <ReactBootstrap.Modal.Title>Login</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
            <h4>Choose Username</h4>
             </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </div>
    );
  },
});


export default Login
