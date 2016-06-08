import React, { Component } from 'react'
import showdown from 'showdown'
class Comment extends Component {
  render () {
     const converter = new showdown.Converter();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {converter.makeHtml(this.props.children.toString())}
      </div>
    )
  }
}
export default Comment
