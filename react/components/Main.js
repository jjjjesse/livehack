import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'
import ChatSection from './ChatSection'
import QuestionSection from './QuestionSection'
import TextInput from './TextInput'


function Wrapper(props) {
  return (
   
      <div className="container-fluid">
      <ReactBootstrap.Grid fluid={true}>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col xs={10} md={8}>
          {props.stream}
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={2} md={4}>
            {props.chat}
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col xs={10} md={8}>
          {props.questions}
          </ReactBootstrap.Col>
          <ReactBootstrap. Col xs={2} md={4}>
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
