import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  isRequestingChecklistSteps: false,
  checklist_steps: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CHECKLIST_STEPS:
      return {...state, isRequestingChecklistSteps: true};
    case actionTypes.RECEIVE_CHECKLIST_STEPS:
      return {...state, isRequestingChecklistSteps: false, checklist_steps: action.checklist_steps };
    default:
      return state;
  }
}
