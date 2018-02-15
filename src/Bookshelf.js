import React, { Component } from 'react';
import { Book } from './Book';

export function Bookshelf (props) {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.books.map((book) => (
         <Book book={book}/>
      ))}
    </div>
  )
}


