import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  isRequestingQuestions: false,
  questions: [],
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.REQUEST_QUESTIONS:
      return {...state, isRequestingQuestions: true};
    case actionTypes.RECEIVE_QUESTIONS:
      return {...state, isRequestingQuestions: false, questions: action.questions };
    default:
      return state;
  }
}
