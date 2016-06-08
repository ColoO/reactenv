import React, { Component } from 'react'
import Markdown  from 'react-remarkable'
class Comment extends Component {
  render () {
  const md = new Markdown();
     return (
       <div className="comment">
         <h2 className="commentAuthor">
           {this.props.author}
         </h2>

        <Markdown>  {this.props.children.toString()}</Markdown>

       </div>
    )
  }
}
export default Comment
