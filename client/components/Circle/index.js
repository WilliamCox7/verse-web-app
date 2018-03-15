import { React, Component } from '../../packages';
import './style.scss';

/**
 * The Circle Screen
 * @extends Component
 */

class Circle extends Component {
  render() {
    return (
      <div className="Circle flex jc-c ai-c">
        <span>{this.props.title[0]}</span>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default Circle;
