export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function setUserAnswer({ authedUser, qid, answer }) {
  return {
    type: SET_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question
  };
}