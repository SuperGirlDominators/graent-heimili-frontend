import * as actionTypes from "../actionTypes/actionTypes";

const initState = {
  isPostingUser: false,
  profileData: {},
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.REQUEST_CREATE_PROFILE:
      return {...state, isPostingUser: true};
    case actionTypes.RECEIVE_CREATE_PROFILE:
      return {...state, isPostingUser: false, profileData: action.profileData };
    default:
      return state;
  }
}
