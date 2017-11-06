import React from 'react'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

const Main = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={9}>{LeftColumn}</Col>
        <Col sm={6} md={3}>{RightColumn}</Col>
      </Row>
    </Grid>

  )
}

export default Main