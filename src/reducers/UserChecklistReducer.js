import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  isRequestingUserChecklist: false,
  userchecklist: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_USER_CHECKLIST:
      return {...state, isRequestingUserChecklist: true};
    case actionTypes.RECEIVE_USER_CHECKLIST:
  return {...state, isRequestingUserChecklist: false, userchecklist: action.userchecklist };
  case actionTypes.TOGGLE_USER_CHECKLIST:
      return {
          ...state,
          userchecklist: state.userchecklist.map(checklist =>
          (checklist.checklistID === action.id)
            ? {...checklist, value: !checklist.value}
            : checklist )
        };
    default:
      return state;
  }
}

