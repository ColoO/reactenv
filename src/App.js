import React, { Component } from 'react';

import Box from './Box'
import CommentBox from './CommentBox'

export default class App extends Component {
  render() {
    return (
      <h1>
        Hello, world.
        <Box />
        <CommentBox />

      </h1>
    );
  }
}
