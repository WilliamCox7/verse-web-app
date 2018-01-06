import { Component } from '../packages';
import { template } from './modules';
import './Section.scss';

class Section extends Component {

  render() {
    return template(this);
  }

}

export default Section;

/*
 *  Home: component that displays a section of the app
 *    - ex: displays the verse or the context etc...
 *
 */
