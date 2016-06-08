import React, { Component } from 'react'
import showdown from 'showdown'
class Comment extends Component {
  render () {
     const converter = new showdown.Converter();
     const rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }
}
export default Comment
