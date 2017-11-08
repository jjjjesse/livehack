import React from 'react'
import { Panel } from 'react-bootstrap'
import Login from './Login'
import './ChatSection.css'

const Chat = (props) => {
  return (


  <div>
      <Panel className='chat-section' bsStyle="primary">
        <p>  Chat section </p>
      </Panel>
  </div>

  )
}

var ChatSection = React.createClass({
  render: function(){
    return(
      <Chat login={<Login />} />
        );
  }

})


export default ChatSection
