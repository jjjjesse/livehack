import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'
import ChatSection from './ChatSection'
import QuestionSection from './QuestionSection'
import TextInput from './TextInput'


function Wrapper(props) {
  return (
   
      <div className="container-fluid">
      <Grid fluid={true}>
        
          <Col xs={10} md={8}>
          {props.stream}
          {props.questions}
          </Col>
        
          <Col xs={2} md={4}>
          {props.chat}
          {props.input}
          </Col>
        
        </Grid>
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
