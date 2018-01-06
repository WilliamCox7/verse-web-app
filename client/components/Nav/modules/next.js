import { sendRequest } from './send-request';

export function next() {
  var reference = this.props.scripture.reference;
  var vers = reference.vers;
  if (vers < reference.lastVerse) { vers++; }
  else { vers = 1; }
  sendRequest(reference.prevBook, reference.prevChap, vers, this);
}

/*
 *  next: retrieves the verse after the current verse
 *
 */
