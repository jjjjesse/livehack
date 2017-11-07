import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'
import ChatSection from './ChatSection'
import QuestionSection from './QuestionSection'
import TextInput from './TextInput'


function Wrapper(props) {
  return (
   
      <div className="container-fluid">
      <ReactBootstrap.Grid>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
          {props.stream}
          </ReactBootstrap.Col>
          <ReactBootstrap.Col>
            {props.chat}
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
          {props.questions}
          </ReactBootstrap.Col>
          <ReactBootstrap.Col>
            {props.input}
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        </ReactBootstrap.Grid>
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
