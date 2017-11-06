import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

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

export {LeftColumn, RightColumn}