import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./Actions";

import "./Counter.css";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="container">
      <div className="title"> Counter Redux App</div>
      <div className="counter">
        <button className="button minus" onClick={decrement}>
          -
        </button>
        <span className="number">{count}</span>
        <button className="button plus" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
