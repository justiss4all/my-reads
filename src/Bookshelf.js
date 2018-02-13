import React, { Component } from 'react';
import { Book } from './Book';

export class Bookshelf extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((book) => (
          <Book book={book}/>
        ))}
      </ul>
    )
  }
}


