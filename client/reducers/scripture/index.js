const SET = 'scripture/SET';
const ADD_COM = 'scripture/ADD_COM';
const ADD_END = 'scripture/ADD_END';
const ADD_STT = 'scripture/ADD_STT';
const SET_IND = 'scripture/SET_IND';
const SET_REF = 'scripture/SET_REF';

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
  let p = action.payload;
  switch(action.type) {

    case SET:
      p.forEach((verse) => {
        editState.verses.push(verse);
      });
      editState.abrString = `${p[1].bookAbr} ${p[1].chapter}:${p[1].verse}`;
      return Object.assign({}, state, editState);

    case ADD_END:
      editState.verses.push(action.payload);
      return Object.assign({}, state, editState);

    case ADD_STT:
      editState.verses[action.index] = action.payload;
      return Object.assign({}, state, editState);

    case SET_IND:
      editState.verses = action.payload;
      return Object.assign({}, state, editState);

    case SET_REF:
      editState.abrString = `${p.bookAbr} ${p.chapter}:${p.verse}`;
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

export function addScriptureToEnd(verse) {
  return {
    type: ADD_END,
    payload: verse
  }
}

export function addScriptureToStart(verse, index) {
  return {
    type: ADD_STT,
    payload: verse,
    index: index
  }
}

export function setIndices(indices) {
  return {
    type: SET_IND,
    payload: indices
  }
}

export function setReference(verse) {
  return {
    type: SET_REF,
    payload: verse
  }
}
