import React, { Component } from 'react'

class Box extends Component {

  render () {
    const boxStyle = {
      padding: 20,
      background: 'cyan',
      border: '2px solid'
    }
    const name= 'seb'

    return (
      <div style={boxStyle}>
        {'Box'} {name}
      </div>
    )
  }

}

export default Box
