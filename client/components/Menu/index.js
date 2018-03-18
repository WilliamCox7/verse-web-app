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
      <div className="Menu">
        <div className="button-container">
          {!this.props.scripture.verses[this.props.scripture.index].context ? (
            <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('context')}>
              <img src={context} />
              <h1>context</h1>
            </div>
          ) : null}
          <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('person')}>
            <img src={geneology} />
            <h1>person</h1>
          </div>
          <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('link')}>
            <img src={link} />
            <h1>link</h1>
          </div>
          <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('military')}>
            <img src={military} />
            <h1>military</h1>
          </div>
          <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('prophet')}>
            <img src={prophet} />
            <h1>prophet</h1>
          </div>
          <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('ruler')}>
            <img src={ruler} />
            <h1>ruler</h1>
          </div>
          {!this.props.scripture.verses[this.props.scripture.index].context ? (
            <div className="menu-button flex jc-c ai-c" onClick={() => this.props.openModal('timeline')}>
              <img src={timeline} />
              <h1>timeline</h1>
            </div>
          ) : null}
          <div className="comment-button flex jc-c ai-c" onClick={() => this.props.openModal('comment')}>
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
    user: state.user,
    scripture: state.scripture
  }
}

export default connect(mapStateToProps)(Menu);
