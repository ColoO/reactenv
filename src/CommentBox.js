import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends Component {

  render () {
    //const converter = new Showdown.converter();
    return (
        <div className="commentBox">
          <h1>Comment</h1>
          <CommentList />
          <CommentForm />
        </div>
      )
  }

}

export default CommentBox
