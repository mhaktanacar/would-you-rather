export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function handleAuthedUser(user) {
  return (dispatch) => {
    dispatch(setAuthedUser(user));
  }
}