import { prev } from './prev';
import { next } from './next';
import { search } from './search';
import { updateSearch } from './update-search';

export function construct(Nav) {

  Nav.state = {
    search: ''
  }

  Nav.prev = prev.bind(Nav);
  Nav.next = next.bind(Nav);
  Nav.search = search.bind(Nav);
  Nav.updateSearch = updateSearch.bind(Nav);

}

/*
 *  construct: the constructor for the Nav component
 *    - prev: retrieves the verse before the current verse
 *    - next: retrieves the verse after the current verse
 *    - search: on submit, this creates the reference to search for and then sends a request
 *    - updateSearch: this function saves the value of the search input in state
 *
 */
