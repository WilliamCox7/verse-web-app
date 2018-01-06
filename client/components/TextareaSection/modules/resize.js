export function resize(comment) {
  var numLines = comment.split("\n");
  var textarea = document.getElementById("add-comment-id");
  textarea.style.height = ((numLines.length - 1) * 20 + 30) + "px";
  var showButtons = comment ? true : false;
  this.setState({showButtons: showButtons});
}

/*
 *  resize: resizes the height of the textarea
 *
 */
