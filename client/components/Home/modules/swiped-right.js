import { sendRequest } from './send-request';

export function swipedRight() {
  var reference = this.props.scripture.reference;
  var vers = reference.vers;
  if (vers > 1) { vers--; }
  else { vers = undefined; }
  sendRequest(reference.prevBook, reference.prevChap, vers, this);
}

/*
 *  swipedRight: retrieves the verse before the current verse
 *
 */
