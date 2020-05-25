import { actionTypes } from './actions';

export const exampleInitialState = {
  count: 1,
  error: false,
  dataList: null,
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: state.count },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ dataList: action.data },
      };

    default:
      return state;
  }
}

export default reducer;
