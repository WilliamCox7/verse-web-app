import { axios } from '../../packages';

export function sendRequest(book, chap, vers, Nav) {
  return axios.get(`/scripture?work=bofm&book=${book}&chap=${chap}&vers=${vers}`).then((response) => {
    if (response.status === 200) {
      var reference = response.data[0];
      Nav.props.setReference(reference);
      localStorage.setItem('scripture', JSON.stringify(reference));
      return true;
    } else {
      var showVerse = vers ? ':' + vers : ':1';
      alert(`Could not fetch ${book} ${chap}${showVerse}`);
      console.log(response);
      return false;
    }
  });
}

/*
 *  sendRequest: sends a request to the serve to retrieve the specified scripture
 *    - sets the reference in the scripture reducer and localStorage
 *    - displays error message if reference was not retrieved
 *
 */
