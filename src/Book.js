import React, { Component } from 'react';

export class Book extends Component {
  render() {
    return <h1>{this.props.book.title}</h1>;
  }
}


