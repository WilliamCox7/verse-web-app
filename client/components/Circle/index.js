import { React, Component } from '../../packages';
import './style.scss';

/**
 * The Circle Screen
 * @extends Component
 */

class Circle extends Component {
  render() {
    return (
      <div className="Circle flex jc-c ai-c" style={this.props.image ? {padding: "15px"} : null}>
        {this.props.image ? (
          <img src={this.props.image} />
        ) : (
          <span>{this.props.title[0]}</span>
        )}
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default Circle;
