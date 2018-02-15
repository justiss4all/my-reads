import React, { Component } from 'react';

export class Book extends Component {
  render() {
    return <div>{this.props.book.title}</div>;
  }
}


