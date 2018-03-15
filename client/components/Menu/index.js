import { React, Component, connect } from '../../packages';
import { context, geneology, link, military, prophet, ruler, timeline } from '../../assets';
import './style.scss';

/**
 * The Menu Screen
 * @extends Component
 */

class Menu extends Component {
  render() {
    return (
      <div className="Menu" style={!this.props.show ? {display: 'none'} : null}>
        <div className="button-container">
          <div className="menu-button flex jc-c ai-c">
            <img src={context} />
            <h1>context</h1>
          </div>
          <div className="menu-button flex jc-c ai-c">
            <img src={geneology} />
            <h1>person</h1>
          </div>
          <div className="menu-button flex jc-c ai-c">
            <img src={link} />
            <h1>link</h1>
          </div>
          <div className="menu-button flex jc-c ai-c">
            <img src={military} />
            <h1>military</h1>
          </div>
          <div className="menu-button flex jc-c ai-c">
            <img src={prophet} />
            <h1>prophet</h1>
          </div>
          <div className="menu-button flex jc-c ai-c">
            <img src={ruler} />
            <h1>ruler</h1>
          </div>
          <div className="menu-button flex jc-c ai-c">
            <img src={timeline} />
            <h1>timeline</h1>
          </div>
          <div className="comment-button flex jc-c ai-c">
            <img src={this.props.user.url} />
            <h1>comment</h1>
          </div>
          <div onTouchEnd={this.props.hideMenu} className="add-section-menu flex jc-c ai-c">
            <h1>+</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Menu);
