import React, { Component } from 'react';
import Box from './Box'
import CommentBox from './CommentBox'


export default class App extends Component {
  render() {
    let data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
    return (
      <h1>
        Hello, worl.
        <Box />
       <CommentBox  url="/api/comments" pollInterval={2000}   />
      </h1>
    );
  }
}
