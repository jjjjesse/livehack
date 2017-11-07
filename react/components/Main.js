import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'
import ChatSection from './ChatSection'
import QuestionSection from './QuestionSection'
import TextInput from './TextInput'
import Login from './Login'

function Wrapper(props) {
  return (

      <div className="container">
      <Grid fluid={true}>
      <Col sm={9}>
        <Row>

          {props.stream}

        </Row>
        <Row>

          {props.questions}

        </Row>
      </Col>
      <Col sm={3}>


            {props.chat}



            {props.input}
            {props.login}
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
               input={<TextInput />}
               login = {<Login/>}
                />

        );
  }

})

export default Main
