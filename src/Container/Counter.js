import React from "react";
import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";
import reducer from "../reducers/reducers";
import { Increase, Decrease, Reset } from "../actions/actions";

const Wrapper = () => {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div className="counter_text">Your score: {count}</div>
        <button onClick={() => dispatch(Increase())}>Increase one</button>
        <button onClick={() => dispatch(Decrease())}>Decrease one</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
        <button onClick={() => dispatch(Increase())}>Increase one</button>
        <button onClick={() => dispatch(Decrease())}>Decrease one</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Wrapper;
