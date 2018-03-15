const SET = 'scripture/SET';
const ADD_COM = 'scripture/ADD_COM';

const initState = {
  abrString: 'Gen 1:1',
  verses: [],
  comments: []
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
      let p = action.payload;
      editState.verses = action.payload;
      editState.abrString = `${p[1].bookAbr} ${p[1].chapter}:${p[1].verse}`;
      return Object.assign({}, state, editState);

    case ADD_COM:
      editState.comments.unshift(action.payload);
      return Object.assign({}, state, editState);

    default: return state;

  }
}

/**
 * @method setReference sets the current scripture reference
 * @param {object} reference contains all things pertaining to the scripture
 */

export function setVerses(verses) {
  return {
    type: SET,
    payload: verses
  }
}

/**
 * @method addComment adds comment to display of comments
 * @param {object} comment contains all things pertaining to the new comment
 */

export function addComment(comment) {
  return {
    type: ADD_COM,
    payload: comment
  }
}
