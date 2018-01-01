const SET = 'scripture/SET';
const ADD_COM = 'scripture/ADD_COM';

const initState = {
  reference: {},
  comments: []
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    //sets the current scripture reference to the payload
    case SET:
      editState.reference = {
        _id: action.payload._id,
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
      editState.comments = action.payload.comments;
      return Object.assign({}, state, editState);

    //adds comment to display of comments
    case ADD_COM:
      editState.comments.push(action.payload);
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

//adds comment to display of comments
export function addComment(comment) {
  return {
    type: ADD_COM,
    payload: comment
  }
}
