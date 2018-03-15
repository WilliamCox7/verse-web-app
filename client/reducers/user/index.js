const SET = 'user/SET';

const initState = {
  picture: null
}

/**
 * @method reducer the reducer for the scripture
 * @param {object} [state=initState] allow the initial state to be manipulated
 * @param {object} action the incoming settings
 * @returns the new state
 */

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.picture = action.payload;
      return Object.assign({}, state, editState);

    default: return state;

  }
}

export function setUser(url) {
  return {
    type: SET,
    payload: url
  }
}
