import React, { Component } from 'react';
import './App.css';
import itemData from './data/todoData';
import Graphs from './components/Graphs';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div className="container">
      <Graphs items={ this.state.items }/>
    </div>
    );
  }

}

export default App;
