const SET = 'cart/SET';

const initState = {
  reference: {}
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    //sets the current scripture reference to the payload
    case SET:
      editState.reference = {
        work: action.payload.work,
        book: action.payload.book,
        chap: action.payload.chap,
        vers: action.payload.vers,
        text: action.payload.text,
        prevBook: action.payload.prevBook,
        prevChap: action.payload.prevChap,
        nextBook: action.payload.nextBook,
        nextChap: action.payload.nextChap,
        lastVerse: action.payload.lastVerse
      }
      return Object.assign({}, state, editState);

    default: return state;

  }
}

//sets the current scripture reference to the payload
export function set(reference) {
  return {
    type: SET,
    payload: reference
  }
}
