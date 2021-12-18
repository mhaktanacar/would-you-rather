import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { addUserQuestion, setUserAnswer } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question))
      })
  }
}

export function handleAddQuestionAnswer({ authedUser, id, answer }) {
  return (dispatch) => {

    const qid = id;

    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(addQuestionAnswer({ authedUser, qid, answer }))
        dispatch(setUserAnswer({ authedUser, qid, answer }))
      })
  };
}



