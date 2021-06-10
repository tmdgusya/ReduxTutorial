import * as type from "./ActionTypes";

export function increment() {
  return {
    type: type.INCREMENT,
  };
}

export function decrement() {
  return {
    type: type.DECREMENT,
  };
}

export function setColor(color) {
  return {
    type: type.SET_COLOR,
    color,
  };
}
