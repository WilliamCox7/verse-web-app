import { React, Component } from '../../packages';
import { Circle } from '../';
import { context } from '../../assets';
import './style.scss';

/**
 * The Verse Screen
 * @extends Component
 */

class Verse extends Component {

  constructor() {
    super();
    this.state = {
      showInfo: true
    }
    this.hideInfo = this.hideInfo.bind(this);
  }

  hideInfo() {
    this.setState({showInfo: !this.state.showInfo});
  }

  render() {
    return (
      <div className="Verse">
        {this.props.verse ? (
          <div>
            <div className="border-wrapper">
              <div className="content-wrapper flex">
                <Circle title={this.props.verse.bookAbr} />
                <div className="content">
                  <h1>{this.props.verse.content}</h1>
                </div>
              </div>
              <i className="material-icons" style={!this.state.showInfo ? {transform: 'rotate(270deg)'} : null}
                onClick={this.hideInfo}>arrow_drop_down</i>
            </div>
            {this.props.verse.context ? (
              <div className="context-wrapper flex">
                <div className="verse-context">
                  <h1>{this.props.verse.context}</h1>
                </div>
                <Circle title="context" image={context} />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Verse;
