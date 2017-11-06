import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Main = () => {
  return (
    <grid>
      <row className="show-grid">
        <col sm={6} md={9}>{LeftColumn}<col>
        <col sm={6} md={3}>{RightColumn}<col>
      </row>
    </grid>

  )
}

export default Main

export {LeftColumn, RightColumn}
