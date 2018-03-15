import { React, Component, connect, Link } from '../../packages';
import { logoSmall } from '../../assets';
import './style.scss';

/**
 * The Nav bar
 * @extends Component
 */

class Nav extends Component {
  render() {
    return (
      <div className="Nav flex jc-sb">
        <Link to={"/"} className="reference flex ai-c">
          {this.props.scripture.reference.abrString}
        </Link>
        <div className="logo flex jc-c ai-c">
          <img src={logoSmall} />
        </div>
        <div className="buttons flex jc-fe ai-c">
          <i className="material-icons">keyboard_arrow_left</i>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture
  }
}

export default connect(mapStateToProps)(Nav);
