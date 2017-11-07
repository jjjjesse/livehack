import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'


function Wrapper(props) {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
          {props.stream}
          </div>
          <div classname="col-sm-4">
        test
          </div>
        </div>
        <div classname="row">
          <div className="col">
        test
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
