import React, { Component } from 'react'

class Comment extends Component {
  render () {
     var converter = new Showdown.converter();
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
