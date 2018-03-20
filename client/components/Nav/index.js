import { React, Component, connect } from '../../packages';
import { Menu, Modal } from '../';
import { setNavIndex, setSwipeIndex, openModal, closeModal } from '../../reducers/nav';
import { logoSmall } from '../../assets';
import './style.scss';

/**
 * The Nav bar
 * @extends Component
 */

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false
    }
    this.updateIndices = this.updateIndices.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  updateIndices() {
    this.props.nav.index === 0 ? this.props.setNavIndex(1) : this.props.setNavIndex(0);
    this.props.setSwipeIndex(0);
  }

  showMenu() {
    this.setState({showMenu: true});
  }

  hideMenu() {
    this.setState({showMenu: false});
  }

  openModal(type) {
    this.hideMenu();
    this.props.openModal(type);
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
        {this.props.nav.index > 0 && !this.state.showMenu ? (
          <div onTouchEnd={this.showMenu} id="nav-add-section" className="add-section flex jc-c ai-c">
            <h1>+</h1>
          </div>
        ) : null}
        <Menu show={this.state.showMenu} hideMenu={this.hideMenu} openModal={this.openModal} />
        {this.props.nav.showModal ? (
          <Modal type={this.props.nav.modalType} closeModal={this.props.closeModal} />
        ) : null}
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
  setSwipeIndex: setSwipeIndex,
  openModal: openModal,
  closeModal: closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
