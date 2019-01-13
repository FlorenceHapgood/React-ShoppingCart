import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {

  render() {
    return (
      <div>
        <button
        onClick={this.handleReset}
        className="btn btn-primary btn-sm m-2"
        >
        Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
           key={counter.id}
           onDelete={this.handleDelete}
           onIncrement={this.handleIncrement}
           counter={counter} //so that we can pass all info to counter component at one and not have to do value = counter.value etc.
           />
        ))}

      </div>
    );
  }
}

export default Counters;
