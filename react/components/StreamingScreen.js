import React from 'react'
import './StreamingScreen.css'
import * as ReactBootstrap from 'react-bootstrap'

const StreamingScreen = () => {
  return (
   <div className="">
     <ReactBootstrap.Tooltip placement="top" className="in" id="tooltip-top">
      Tooltip top
    </ReactBootstrap.Tooltip>
      <div className='stream-box'>Streaming Screen</div>
    </div>
  )
}


export default StreamingScreen
