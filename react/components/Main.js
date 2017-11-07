import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'


function Wrapper(props) {
  return (
      <div className="wrapper">
        <div className="leftcolumn">
          <div className="streamingscreen">
          {props.stream}
          </div>
          <div classname="questionsection">
      
          </div>
        </div>
        <div classname="rightcolumn">
          <div className="chatsection">
        
          </div>
        </div>
      </div>
    );
  }


var Main = React.createClass({
  render: function(){
    return(
      <Wrapper stream={<StreamingScreen />} />

        );
  }

})
 
export default Main
