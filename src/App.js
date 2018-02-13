import React, { Component } from 'react';
import './App.css';
import { Bookshelf } from './Bookshelf';

const books = [
  {
    "id":"1",
    "title":"Start with Why",
    "author":"Simon Sinek"
  },
  {
    "id":"2",
    "title":"Ender's Game",
    "author":"Orson Scott Card"
  },
  {
    "id":"3",
    "title":"The Nightingale",
    "author":"Kristin Hannah"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bookshelf</h1>
        </header>
        <Bookshelf books={books} />
      </div>
    );
  }
}

export default App;
