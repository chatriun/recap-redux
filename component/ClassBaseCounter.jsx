import { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  handleIncrement() {
    this.props.incrementOne();
  }

  handleDecrement() {
    this.props.decrementOne();
  }

  handleAddAmount(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const number = parseInt(formData.get("number"));

    this.props.incrementAmount(number);
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleDecrement.bind(this)}>-</button>
          <h2>{this.props.counter}</h2>
          <button onClick={this.handleIncrement.bind(this)}>+</button>
        </div>
        <form onSubmit={this.handleAddAmount.bind(this)}>
          <input name="number" type="number" />
          <button type="submit">add amount</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementOne: () => dispatch({ type: "increment" }),
    decrementOne: () => dispatch({ type: "decrement" }),
    incrementAmount: (number) =>
      dispatch({ type: "increment_amount", amount: number }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
