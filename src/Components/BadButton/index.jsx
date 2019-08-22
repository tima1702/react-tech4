import React, { Component } from "react";

class BadButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
    this.decCounter = this.decCounter.bind(this);
  }

  decCounter() {
    this.setState(prevState => {
      return {
        ...prevState,
        count: prevState.count - 1
      };
    });
  }

  render() {
    const { count } = this.state;
    if (count === 0) {
      throw new Error("TEST");
    }

    return (
      <button onClick={this.decCounter}>
        Очень плохая кнопка (нажми {count} раз)
      </button>
    );
  }
}

export default BadButton;
