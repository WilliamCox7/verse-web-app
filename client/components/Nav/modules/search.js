import { sendRequest } from './send-request';

export function search() {
  var book = "", chap, vers, count = 0;
  var ref = this.state.search;
  ref = ref.split(" ");
  ref.forEach((part) => {
    if (part.indexOf(":") === -1) {
      if (count > 0) {
        book += " " + part;
      } else {
        book += part;
      }
      count++;
    } else {
      part = part.split(":");
      chap = part[0];
      vers = part[1];
    }
  });
  sendRequest(book, chap, vers, this).then((success) => {
    if (success) {
      this.setState({search: ""});
    }
  });
}

/*
 *  search: on submit, this creates the reference to search for and then sends a request
 *    - takes in a string that is then split up into a book, chapter, and verse
 *
 */
