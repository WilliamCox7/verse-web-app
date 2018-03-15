import { React, Component, SwipeableViews, connect, axios } from '../../packages';
import { addScriptureToEnd, addScriptureToStart, setReference } from '../../reducers/scripture';
import { Verse } from '../';
import './style.scss';

/**
 * The Scripture Screen
 * @extends Component
 */

class Scripture extends Component {

  constructor() {
    super();
    this.state = {
      index: 101,
      y: undefined
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.saveY = this.saveY.bind(this);
    this.toggleAddSection = this.toggleAddSection.bind(this);
  }

  changeIndex(index) {
    let verses = this.props.scripture.verses;
    if (!verses[index-1]) {
      axios.get('/verse/' + verses[index].prevId).then((response) => {
        this.props.addScriptureToStart(response.data[0], index-1);
      });
    } else if (index === verses.length-1) {
      axios.get('/verse/' + verses[verses.length-1].nextId).then((response) => {
        this.props.addScriptureToEnd(response.data[0]);
      });
    }
    this.props.setReference(verses[index]);
    this.setState({index: index});
  }

  saveY(e) {
    this.setState({y: e.touches[0].clientY})
  }

  toggleAddSection(e) {
    if (e.touches[0].clientY > this.state.y + 20) {
      document.getElementById('nav-add-section').style.opacity = 0;
    } else if (e.touches[0].clientY < this.state.y - 20) {
      document.getElementById('nav-add-section').style.opacity = 1;
    }
  }

  render() {

    let verses = this.props.scripture.verses.map((verse, i) => {
      return <Verse verse={verse} key={i} />;
    });

    return (
      <div className="Scripture" onTouchStart={this.saveY} onTouchMove={this.toggleAddSection}>
        {verses.length > 100 ? (
          <SwipeableViews children={verses} index={this.state.index}
            onChangeIndex={this.changeIndex} style={{'height': '100%'}}>
          </SwipeableViews>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture
  }
}

const mapDispatchToProps = {
  addScriptureToEnd: addScriptureToEnd,
  addScriptureToStart: addScriptureToStart,
  setReference: setReference
}

export default connect(mapStateToProps, mapDispatchToProps)(Scripture);
