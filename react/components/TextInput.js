import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './TextInput.css'

const TextInput = () => {
  return (

      <ReactBootstrap.Form>
        <ReactBootstrap.FormGroup controlId="chatfield" >
          <ReactBootstrap.FormControl type="text" placeholder="Enter text"/>
        </ReactBootstrap.FormGroup>
      </ReactBootstrap.Form> )}


export default TextInput
