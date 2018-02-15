import React, { Component } from 'react';
import './App.css';
import { Bookshelf } from './Bookshelf';

const bookshelves = ["Currently Reading", "Want to Read", "Read"]; 

const books = [
  {
    "id":"1",
    "title":"Start with Why",
    "author":"Simon Sinek",
    "bookshelf":"Currently Reading"
  },
  {
    "id":"2",
    "title":"Ender's Game",
    "author":"Orson Scott Card",
    "bookshelf":"Want to Read"
  },
  {
    "id":"3",
    "title":"The Nightingale",
    "author":"Kristin Hannah",
    "bookshelf":"Currently Reading"
  }
];

function sortBooks(shelfName) {
  return books.filter((book) => shelfName === book.bookshelf)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bookshelf</h1>
        </header>
        <ol className="books-grid">
          <li>
            {bookshelves.map((shelfName) => (
              <Bookshelf name={shelfName} books={sortBooks(shelfName)}/>
            ))
            }
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
