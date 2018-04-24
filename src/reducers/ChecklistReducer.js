import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  isRequestingChecklist: false,
  checklist: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CHECKLIST:
      return {...state, isRequestingChecklist: true};
    case actionTypes.RECEIVE_CHECKLIST:
      return {...state, isRequestingChecklist: false, checklist: action.checklist };
    default:
      return state;
  }
}
