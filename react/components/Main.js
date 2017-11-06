import React from 'react'
<<<<<<< HEAD
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Main = () => {
  return (
    <grid>
      <row className="show-grid">
        <col sm={6} md={9}>{LeftColumn}</col>
        <col sm={6} md={3}>{RightColumn}</col>
      </row>
    </grid>

  )
}

export default Main

export {LeftColumn, RightColumn}
=======

const Main = () => {
  return (
    <div className='hello-world'>
      <h1>Hello World</h1>
      <p>Welcome to my world</p>
    </div>
  )
}

export default Main
>>>>>>> 403a70e30c409c81ed8d4aea56561dbb68083e80
