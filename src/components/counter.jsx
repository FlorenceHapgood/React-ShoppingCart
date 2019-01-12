import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    console.log("Increment clicked");
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sm">
        Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += (this.state.count ===0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
