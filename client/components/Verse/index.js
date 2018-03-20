import { React, Component, Holdable, defineHold, connect } from '../../packages';
import { openModal } from '../../reducers/nav';
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
    this.openModal = this.openModal.bind(this);
  }

  hideInfo() {
    this.setState({showInfo: !this.state.showInfo});
  }

  openModal(type) {
    window.navigator.vibrate(10);
    this.props.openModal(type)
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
                <Holdable config={hold} onHoldComplete={() => this.openModal('context')}>
                  <div className="verse-context">
                    <h1>{this.props.verse.context}</h1>
                  </div>
                </Holdable>
                <Circle title="context" image={context} />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

const hold = defineHold({holdFor: 500});

const mapDispatchToProps = {
  openModal: openModal
}

export default connect(null, mapDispatchToProps)(Verse);
