import React, { Component } from 'react'
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <div id="container">
        <section id="main">
          <Chat />
        </section>
      </div>
    )
  }
}

export default App;
