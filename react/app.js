import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import {Main, LeftColumn, RightColumn} from './components/Main'
import {StreamingScreen} from './components/StreamingScreen'

ReactDOM.render(<StreamingScreen />, document.getElementById('app'))
// ReactDOM.render(<Main />, document.getElementById('app'))
=======
import StreamingScreen from './components/StreamingScreen'
import ChatSection from './components/ChatSection'
import QuestionSection from './components/QuestionSection'
import TextInput from './components/TextInput'
import SwitchButton from './components/SwitchButton'
import Main from './components/Main'

ReactDOM.render(<Main />, document.getElementById('app'))
>>>>>>> 403a70e30c409c81ed8d4aea56561dbb68083e80
