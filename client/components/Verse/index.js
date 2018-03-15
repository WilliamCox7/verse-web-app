import { React, Component } from '../../packages';
import './style.scss';

/**
 * The Verse Screen
 * @extends Component
 */

class Verse extends Component {
  render() {
    return (
      <div className="Verse">
        {this.props.verse.content}
      </div>
    );
  }
}

export default Verse;
