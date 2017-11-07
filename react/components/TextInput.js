import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const TextInput = () => {
  return (
      <form>
        <ReactBootstrap.FormGroup controlId="formBasicText" >
          <ReactBootstrap.FormControl type="text" placeholder="Enter text"/>
        </ReactBootstrap.FormGroup>
      </form> )}


export default TextInput
