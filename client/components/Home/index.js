import { React, Component, connect, SwipeableViews } from '../../packages';
import { buildOptionsFor } from './modules';
import './style.scss';

/**
 * The Home Screen
 * @extends Component
 */

class Home extends Component {

  constructor() {
    super();
    this.state = {
      workIndex: 0,
      bookIndex: 0,
      chapIndex: 0,
      versIndex: 0,
      pullingList: undefined,
      y: undefined,
      pullingDisabled: false,
      swipeIndex: 0
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.changeIndexFromSpan = this.changeIndexFromSpan.bind(this);
    this.setPulling = this.setPulling.bind(this);
    this.stopPulling = this.stopPulling.bind(this);
    this.updatePullingIndex = this.updatePullingIndex.bind(this);
    this.disablePulling = this.disablePulling.bind(this);
    this.enablePulling = this.enablePulling.bind(this);
    this.updatedSwipeIndex = this.updatedSwipeIndex.bind(this);
  }

  changeIndex(e) {
    let newState = Object.assign({}, this.state);
    newState[e.target.name] = Number(e.target.value);
    this.setState(newState);
  }

  changeIndexFromSpan(e, indexToUpdate) {
    let newState = Object.assign({}, this.state);
    let nextIndex = newState.swipeIndex + 1;
    newState[indexToUpdate] = Number(e.target.getAttribute('data-key'));
    if (nextIndex < 4) {
      newState.swipeIndex = nextIndex;
    }
    this.setState(newState);
  }

  setPulling(e, list) {
    this.setState({pullingList: list, y: e.touches[0].clientY});
  }

  stopPulling(e) {
    this.setState({pullingList: undefined, y: undefined});
  }

  updatePullingIndex(e) {
    if (!this.state.pullingDisabled) {
      let newState = Object.assign({}, this.state);
      let indexType = this.state.pullingList + 'Index';
      let indexToUpdate = newState[indexType];
      let element = document.getElementById(this.state.pullingList);
      if (e.changedTouches[0].clientY > this.state.y + 15) {
        if (indexToUpdate > 0) {
          indexToUpdate--;
          newState[indexType] = indexToUpdate;
          newState.y = e.changedTouches[0].clientY
          if (indexType === 'workIndex') {
            newState.bookIndex = 0;
            newState.chapIndex = 0;
            newState.versIndex = 0;
          } else if (indexType === 'bookIndex') {
            newState.chapIndex = 0;
            newState.versIndex = 0;
          } else if (indexType === 'chapIndex') {
            newState.versIndex = 0;
          }
          this.setState(newState);
        }
      } else if (e.changedTouches[0].clientY < this.state.y - 15) {
        if (indexToUpdate < element.children.length - 1) {
          indexToUpdate++;
          newState[indexType] = indexToUpdate;
          newState.y = e.changedTouches[0].clientY
          if (indexType === 'workIndex') {
            newState.bookIndex = 0;
            newState.chapIndex = 0;
            newState.versIndex = 0;
          } else if (indexType === 'bookIndex') {
            newState.chapIndex = 0;
            newState.versIndex = 0;
          } else if (indexType === 'chapIndex') {
            newState.versIndex = 0;
          }
          this.setState(newState);
        }
      }
    }
  }

  disablePulling() {
    this.setState({pullingDisabled: true});
  }

  enablePulling() {
    this.setState({pullingDisabled: false});
  }

  updatedSwipeIndex(index) {
    this.setState({swipeIndex: index});
  }

  render() {

    let options = buildOptionsFor(this);

    return (
      <div className="Home">
        <div className="search-ref flex jc-sb">
          <div className="selects">
            <select value={this.state.workIndex} name="workIndex" onChange={this.changeIndex}>{options.works.options}</select>
            <select value={this.state.bookIndex} name="bookIndex" onChange={this.changeIndex}>{options.books.options}</select>
            <select value={this.state.chapIndex} name="chapIndex" onChange={this.changeIndex}>{options.chapters.options}</select>
            <select value={this.state.versIndex} name="versIndex" onChange={this.changeIndex}>{options.verses.options}</select>
          </div>
          <button>go</button>
        </div>
        <SwipeableViews index={this.state.swipeIndex} onChangeIndex={this.updatedSwipeIndex} style={{'overflowY': 'scroll', 'height': 'calc(100vh - 175px)'}}
          onSwitching={this.disablePulling} onTransitionEnd={this.enablePulling}>
          <div className="swipe-list flex fd-c fw-w" id="work" onTouchStart={(e) => this.setPulling(e, 'work')}
            onTouchMove={this.updatePullingIndex} onTouchEnd={this.stopPulling}>{options.works.spans}</div>
          <div className="swipe-list flex fd-c fw-w" id="book" onTouchStart={(e) => this.setPulling(e, 'book')}
            onTouchMove={this.updatePullingIndex} onTouchEnd={this.stopPulling}>{options.books.spans}</div>
          <div className="swipe-list flex fd-c fw-w" id="chap" onTouchStart={(e) => this.setPulling(e, 'chap')}
            onTouchMove={this.updatePullingIndex} onTouchEnd={this.stopPulling}>{options.chapters.spans}</div>
          <div className="swipe-list flex fd-c fw-w" id="vers" onTouchStart={(e) => this.setPulling(e, 'vers')}
            onTouchMove={this.updatePullingIndex} onTouchEnd={this.stopPulling}>{options.verses.spans}</div>
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture
  }
}

export default connect(mapStateToProps)(Home);
