import React, { Component } from 'react';
import { Radio } from './Radio';

export class Feeling extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 0
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.selectRadio = this.selectRadio.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.update(this.state.selected)
  } 

  selectRadio(selected){
    this.setState({
      selected: selected.target.value
    })
  } 


  render(){
    const radios = [1,2,3,4,5].map( n => {
      return (
        <Radio key={n} onClick={this.selectRadio} name='feeling' type='radio' value={n}/>
      )
    })
    return (
      <form onSubmit={this.onSubmit}>
        {radios}  
        <button type='submit' > im am feeling</button>
      </form>
    )
  }
}

