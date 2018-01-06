import { Component, connect } from '../packages';
import { template, mapStateToProps } from './modules';
import './Verse.scss';

class Verse extends Component {

  render() {
    return template(this);
  }

}

export default connect(mapStateToProps)(Verse);

/*
 *  Verse: component that displays the current verse at the top of the screen
 *
 */
