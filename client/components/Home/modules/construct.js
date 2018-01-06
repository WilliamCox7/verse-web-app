import { swipedLeft } from './swiped-left';
import { swipedRight } from './swiped-right';

export function construct(Home) {

  Home.state = {
    search: ''
  }

  Home.swipedLeft = swipedLeft.bind(Home);
  Home.swipedRight = swipedRight.bind(Home);

}

/*
 *  construct: the constructor for the Nav component
 *    - swipedLeft: retrieves the verse before the current verse
 *    - swipedRight: retrieves the verse after the current verse
 *
 */
