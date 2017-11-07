import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Login from './Login'
import './ChatSection.css'

const Chat = (props) => {
  return (
    <div className="container-fluid chat-section">
    {props.login}
   <ReactBootstrap.Panel header={ChatSection} bsStyle="primary">
      Chat section
    </ReactBootstrap.Panel>
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
