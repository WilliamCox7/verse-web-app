import { sendRequest } from './send-request';

export function prev() {
  var reference = this.props.scripture.reference;
  var vers = reference.vers;
  if (vers > 1) { vers--; }
  else { vers = undefined; }
  sendRequest(reference.prevBook, reference.prevChap, vers, this);
}

/*
 *  prev: retrieves the verse before the current verse
 *
 */
