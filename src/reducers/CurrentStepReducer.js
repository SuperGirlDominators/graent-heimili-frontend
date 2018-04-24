import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  current_step: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_STEP:
      return {...state, current_step: action.current_step };
    default:
      return state;
  }
}
