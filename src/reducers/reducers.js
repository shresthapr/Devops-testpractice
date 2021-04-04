import * as actionTypes from "../actions/actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + action.payload };

    case actionTypes.DECREASE:
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };

    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
  }
  return state;
};

export default reducer;
