import { axios } from '../../packages';

export function componentDidMount(Home) {
  var reference = JSON.parse(localStorage.getItem('scripture'));
  if (reference) {
    Home.props.setReference(reference);
  } else {
    axios.get('/scripture?work=bofm&book=1%20Nephi&chap=1&vers=1').then((response) => {
      if (response.status === 200) {
        var reference = response.data[0];
        Home.props.setReference(reference);
        localStorage.setItem('scripture', JSON.stringify(reference));
      } else {
        alert('Could not fetch 1 Nephi 1:1');
        console.log(response);
      }
    });
  }
}

/*
 *  componentDidMount: what happens when the cycle ends for the Home component
 *    - initializes the scripture reference
 *    - if there is no reference saved in localStorage, fetch it from server
 *
 */
