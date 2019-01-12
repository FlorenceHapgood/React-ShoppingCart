import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
           key={counter.id}
           onDelete={this.handleDelete}
           counter={counter} //so that we can pass all info to counter component at one and not have to do value = counter.value etc.
           />
        ))}
      </div>
    );
  }
}

export default Counters;
