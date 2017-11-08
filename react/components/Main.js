import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import StreamingScreen from './StreamingScreen'
import ChatSection from './ChatSection'
import QuestionSection from './QuestionSection'
import TextInput from './TextInput'
import Login from './Login'


function LeftColumn(props) {
  return (
      <Col sm={9}>
        <Row>

          {props.stream}
        </Row>
        <Row>
          {props.questions}
        </Row>
      </Col>
  );
}


function RightColumn(props) {
  return (
  <Col sm={3}>

            {props.chat}
            {props.input}
            {props.login}
     </Col>
     );
}



class Main extends React.Component {

  state = { showing: true };

  render(){
    const { showing } = this.state;
    return(

    <div className="container-fluid">
      <Grid fluid={true}>
       <Button onClick={() => this.setState({ showing: !showing })}>toggle</Button>
                { showing 
      ? <LeftColumn stream={<StreamingScreen />}
               questions={<QuestionSection />} />
      : null 
    }
      <RightColumn input={<TextInput />}
               login = {<Login/>}
               chat={<ChatSection />} />


        </Grid>
      </div>

        )
  }

}

export default Main
