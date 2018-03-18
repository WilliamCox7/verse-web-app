import { React, Component, SwipeableViews, connect, axios } from '../../packages';
import { addScriptureToEnd, addScriptureToStart, setReference, setIndex } from '../../reducers/scripture';
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
      y: undefined
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.saveY = this.saveY.bind(this);
    this.toggleAddSection = this.toggleAddSection.bind(this);
  }

  changeIndex(index) {
    let verses = this.props.scripture.verses;
    if (!verses[index-1]) {
      axios.get(`/verse/${verses[index].prevId}/${this.props.user.userId}`).then((response) => {
        this.props.addScriptureToStart(response.data, index-1);
      });
    } else if (index === verses.length-1) {
      axios.get(`/verse/${verses[verses.length-1].nextId}/${this.props.user.userId}`).then((response) => {
        this.props.addScriptureToEnd(response.data);
      });
    }
    this.props.setReference(verses[index]);
    this.props.setIndex(index);
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
          <SwipeableViews children={verses} index={this.props.scripture.index}
            onChangeIndex={this.changeIndex} style={{'height': '100%'}}>
          </SwipeableViews>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture,
    user: state.user
  }
}

const mapDispatchToProps = {
  addScriptureToEnd: addScriptureToEnd,
  addScriptureToStart: addScriptureToStart,
  setReference: setReference,
  setIndex: setIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(Scripture);
