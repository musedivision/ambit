import React, { Component } from 'react';

export class Radio extends Component {
  render(){
    return (
      <input  onClick={this.props.onClick} name='feeling' type='radio' value={this.props.value} />
    )
  }
}

