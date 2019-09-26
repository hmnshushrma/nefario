import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import ViewContainer from './views/'

class App extends Component {
  render() {
    return <ViewContainer />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
