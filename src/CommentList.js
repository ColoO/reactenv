import React, { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component {

  render () {
    const commentNodes = this.props.data.map((comment, i) => (
      <Comment key={i} author={comment.author}>
        {comment.text}
      </Comment>
    ))
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }

}
export default CommentList
