import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './TextInput.css'

const TextInput = () => {
  return (
      <form>
        <ReactBootstrap.FormGroup controlId="formControlsTextarea">
          <ReactBootstrap.ControlLabel>Chat</ReactBootstrap.ControlLabel>
            <ReactBootstrap.FormControl componentClass="textarea" placeholder="Enter Text" />
        </ReactBootstrap.FormGroup>
      </form> )}


export default TextInput
