import React, { Component } from 'react'

class Box extends Component {

  render () {
    const boxStyle = {
      padding: 20,
      background: 'cyan',
      border: '2px solid'
    }

    return (
      <div style={boxStyle}>
        {'Box'}
      </div>
    )
  }

}

export default Box
