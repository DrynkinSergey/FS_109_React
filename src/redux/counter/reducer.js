const initialState = {
  counter: 100,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE_BY_STEP': {
      return {
        ...state,
        counter: state.counter + state.step,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - state.step,
      };
    }
    case 'RESET': {
      return initialState;
    }
    case 'CHANGE_STEP':
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
