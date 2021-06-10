import * as type from "../actions/ActionTypes";

const initialState = {
  number: 0,
};

export default function counter(prevState = initialState, action) {
  switch (action.type) {
    case type.INCREMENT:
      return { ...prevState, number: prevState.number + 1 };

    case type.DECREMENT:
      return { ...prevState, number: prevState.number - 1 };
  }

  return prevState;
}
