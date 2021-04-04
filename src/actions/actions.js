export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const RESET = "RESET";

export const Increase = () => ({
  type: INCREASE,
  payload: 1,
});

export const Decrease = () => ({
  type: DECREASE,
});
export const Reset = () => ({
  type: RESET,
});
