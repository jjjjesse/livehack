import React from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import './TextInput.css'

const TextInput = () => {
  return (

      <Form>
        <FormGroup controlId="chatfield" >
          <FormControl type="text" placeholder="Enter text"/>
        </FormGroup>
      </Form> )}


export default TextInput
