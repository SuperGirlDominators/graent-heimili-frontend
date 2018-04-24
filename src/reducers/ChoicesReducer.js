import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  isRequestingChoices: false,
  choices: [],
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.REQUEST_CHOICES:
      return {...state, isRequestingChoices: true};
    case actionTypes.RECEIVE_CHOICES:
      return {...state, isRequestingChoices: false, choices: action.choices };
    case actionTypes.TOGGLE_CHOICE:
      return {
          ...state,
          choices: state.choices.map(choice =>
          (choice.choiceID === action.id)
            ? {...choice, value: !choice.value}
            : choice )
        };
    default:
      return state;
  }
}
