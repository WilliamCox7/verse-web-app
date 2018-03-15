import { React, Component, connect } from '../../packages';
import { setNavIndex, setSwipeIndex } from '../../reducers/nav';
import { logoSmall } from '../../assets';
import './style.scss';

/**
 * The Nav bar
 * @extends Component
 */

class Nav extends Component {

  constructor() {
    super();
    this.updateIndices = this.updateIndices.bind(this);
  }

  updateIndices() {
    this.props.nav.index === 0 ? this.props.setNavIndex(1) : this.props.setNavIndex(0);
    this.props.setSwipeIndex(0);
  }

  render() {
    return (
      <div className="Nav flex jc-sb">
        <div onClick={this.updateIndices} className="reference flex ai-c">
          {this.props.scripture.abrString}
        </div>
        <div className="logo flex jc-c ai-c">
          <img src={logoSmall} />
        </div>
        <div className="settings flex jc-fe ai-c">
          <i className="material-icons">settings</i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  setNavIndex: setNavIndex,
  setSwipeIndex: setSwipeIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
