import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'
import ChatSection from './ChatSection'
import QuestionSection from './QuestionSection'
import TextInput from './TextInput'


function Wrapper(props) {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
          {props.stream}
          </div>
          <div classname="col-sm-4">
            {props.chat}
          </div>
        </div>
        <div classname="row">
          <div className="col">
          {props.questions}
          </div>
          <div className="col">
            {props.input}
          </div>
        </div>
      </div>
    );
  }


var Main = React.createClass({
  render: function(){
    return(
      <Wrapper stream={<StreamingScreen />} 
               chat={<ChatSection />} 
               questions={<QuestionSection />}
               input={<TextInput />} />

        );
  }

})
 
export default Main
