/**
 * @method setReference sets the current scripture reference
 * @param {object} editState the state to be edited
 * @returns the edited state
 */

export default function(editState) {
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
  return editState;
}
