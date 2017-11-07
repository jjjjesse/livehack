import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './ChatSection.css'

const ChatSection = () => {
  return (
    <div className="container-fluid chat-section">
   <ReactBootstrap.Panel header={ChatSection} bsStyle="primary">
      Chat section
    </ReactBootstrap.Panel>
    </div>
  )
}


export default ChatSection
