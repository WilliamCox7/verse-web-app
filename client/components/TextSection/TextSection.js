import { Component } from '../packages';
import { template } from './modules';
import './TextSection.scss';

class TextSection extends Component {

  render() {
    return template(this);
  }

}

export default TextSection;

/*
 *  TextSection: component that displays plain text
 *
 */
