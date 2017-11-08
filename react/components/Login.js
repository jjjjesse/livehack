import React from 'react'
import  { Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './Login.css'

const Login = React.createClass({
  getInitialState() {
    return { 
      showModal: false, 
      value: '',
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <div>

        <Button
          bsStyle="primary"
      
          className="buttonSize"
          onClick={this.open}
        >
          Login
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
        <FormGroup
          controlId="formBasicText" >
          <ControlLabel>Choose Username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
              <FormControl.Feedback />
            </FormGroup>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
});


export default Login
