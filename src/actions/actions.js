import * as actionTypes from "../actionTypes/actionTypes";
import firebase from 'firebase';

const databaseURL = "http://localhost:8080/api"

function requestCreateProfile() {
  return {
    type: actionTypes.REQUEST_CREATE_PROFILE
  };
}

function receiveCreateProfile(profileData) {
  return {
    type: actionTypes.RECEIVE_CREATE_PROFILE,
    profileData
  };
}

export const createProfile = (profileData)=>{
  return dispatch => {
    dispatch(requestCreateProfile());
    const url = `${databaseURL}/adduser`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');

    firebase.auth().currentUser.getIdToken().then((idToken)=>{
      profileData.realToken = idToken;
      console.log(profileData)
      fetch(url, {
        method: "POST",
        body: JSON.stringify(profileData),
        headers: headers,
        credentials: 'include', // Don't forget to specify this if you need cookies
      }).then(response => {
        console.log('user created')
        dispatch(receiveCreateProfile(profileData));
      })
      .catch( err => {
        console.log("The error is ", err)
      });
    });
  }
}

/*
 * Questions
 */

function requestQuestions() {
  return {
    type: actionTypes.REQUEST_QUESTIONS
  };
}

function receiveQuestions(questions) {
  return {
    type: actionTypes.RECEIVE_QUESTIONS,
    questions
  };
}

export const getQuestions = () => {
  return dispatch => {
    dispatch(requestQuestions());
    const url = `${databaseURL}/questions`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "GET",
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      dispatch(receiveQuestions(response));
    })
    .catch( err => {
      console.log("The error is ", err);
      receiveQuestions([]);
    });
  }
}

 /*
  * CHOICES
  */

function requestChoices() {
  return {
    type: actionTypes.REQUEST_CHOICES
  };
}

function receiveChoices(choices) {
  return {
    type: actionTypes.RECEIVE_CHOICES,
    choices
  };
}

export const getChoices = () => {
  return dispatch => {
    dispatch(requestChoices());
    const url = `${databaseURL}/data`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "GET",
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      dispatch(receiveChoices(response));
    })
    .catch( err => {
      console.log("The error is ", err);
      receiveChoices([]);
    });
  }
}

function toggleChoiceAction(id) {
  return {
    type: actionTypes.TOGGLE_CHOICE,
    id
  };
}

export const toggleChoice = (id) => {
  return dispatch => {
    dispatch(toggleChoiceAction(id));
  }
}

export const postChoices = (choices) => {
  return dispatch => {
    dispatch(requestChoices());
    const url = `${databaseURL}/data`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(choices),
      credentials: 'include', // Don't forget to specify this if you need cookies
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      console.log(response);
      dispatch(receiveChoices([]));
    })
    .catch( err => {
      console.log("The error is ", err);
      receiveChoices([]);
    });
  }
}

const requestChecklist = ()=> {
  return {
    type: actionTypes.REQUEST_CHECKLIST
  };
}

const receiveChecklist = () =>{
  return {
    type: actionTypes.RECEIVE_CHECKLIST
  };
}

export const getChecklist = () => {
  return dispatch => {
    dispatch(requestChecklist());
    const url = `${databaseURL}/data`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "GET",
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      dispatch(receiveChecklist(response));
    })
    .catch( err => {
      console.log("The error is ", err);
      receiveChecklist([]);
    });
  }
}


// Get user checklist
const requestUserChecklist = ()=> {
  return {
    type: actionTypes.REQUEST_USER_CHECKLIST
  };
}

const receiveUserChecklist = (userchecklist) =>{
  return {
    type: actionTypes.RECEIVE_USER_CHECKLIST,
    userchecklist
  };
}

//toggle userchecklist

function toggleUserChecklistAction(id) {
  return {
    type: actionTypes.TOGGLE_USER_CHECKLIST,
    id
  };
}

export const toggleUserChecklist = (id) => {
  return dispatch => {
    dispatch(toggleUserChecklistAction(id));
  }
}

export const getUserChecklist = () => {
  return dispatch => {
    dispatch(requestUserChecklist());
    const url = `${databaseURL}/userchecklist`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "GET",
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      dispatch(receiveUserChecklist(response));
    })
    .catch( err => {
      console.log("The error is ", err);
      receiveUserChecklist([]);
    });
  }
}

/*
 * Checklist steps
 */

function requestChecklistSteps() {
  return {
    type: actionTypes.REQUEST_CHECKLIST_STEPS
  };
}

function receiveChecklistSteps(checklist_steps) {
  return {
    type: actionTypes.RECEIVE_CHECKLIST_STEPS,
    checklist_steps
  };
}

export const getChecklistSteps = () => {
  return dispatch => {
    dispatch(requestChecklistSteps());
    const url = `${databaseURL}/checkliststeps`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "GET",
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      dispatch(receiveChecklistSteps(response));
    })
    .catch( err => {
      console.log("The error is ", err);
      receiveChecklistSteps([]);
    });
  }
}

export const CurrentStep = (current_step)=> {
  return {
    type: actionTypes.CURRENT_STEP,
    current_step
  };
}











