export function clear() {
  var textarea = document.getElementById("add-comment-id");
  localStorage.setItem("comment", "");
  var reference = this.props.scripture.reference;
  reference.comments = this.props.scripture.comments;
  localStorage.setItem("scripture", JSON.stringify(reference));
  this.setState({showButtons: false, comment: ""});
}

/*
 *  clear: clears everything related to the comment that was just saved
 *
 */
