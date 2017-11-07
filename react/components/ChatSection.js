import React from 'react'
import { Panel } from 'react-bootstrap'
import Login from './Login'
import './ChatSection.css'

const Chat = (props) => {
  return (
    <div className="container-fluid chat-section">
    {props.login}
   <Panel header={ChatSection} bsStyle="primary">
      Chat section
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
