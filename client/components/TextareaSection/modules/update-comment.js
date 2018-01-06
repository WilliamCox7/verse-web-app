export function updateComment(e) {
  var comment = e.target.value;
  this.setState({comment: comment}, () => {
    localStorage.setItem("comment", comment);
    this.resize(comment);
  });
}

/*
 *  updateComment: saves the current value of the comment
 *
 */
