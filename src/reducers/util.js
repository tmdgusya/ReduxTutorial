import { SET_COLOR } from "../actions/ActionTypes";

export default function ui(prevState = { color: [200, 200, 200] }, action) {
  if (action === SET_COLOR) {
    return {
      color: action.color,
    };
  } else {
    return prevState;
  }
}
