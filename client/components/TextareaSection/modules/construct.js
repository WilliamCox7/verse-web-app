import { updateComment } from './update-comment';
import { resize } from './resize';
import { clear } from './clear';
import { save } from './save';

export function construct(TextareaSection) {

  var comment = localStorage.getItem("comment");

  TextareaSection.state = {
    showButtons: comment ? true : false,
    comment: comment ? comment : ""
  }

  TextareaSection.updateComment = updateComment.bind(TextareaSection);
  TextareaSection.resize = resize.bind(TextareaSection);
  TextareaSection.clear = clear.bind(TextareaSection);
  TextareaSection.save = save.bind(TextareaSection);

}

/*
 *  construct: the constructor for the TextareaSection component
 *    - updateComment: saves the current value of the comment
 *    - resize: resizes the height of the textarea
 *    - clear: clears everything related to the comment that was just saved
 *    - save: this saves the comment to the server
 *
 */
