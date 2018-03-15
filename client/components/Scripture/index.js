import { React, Component, SwipeableViews, connect } from '../../packages';
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
      index: 1
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(index) {
    this.setState({index: index});
  }

  render() {

    let verses = this.props.scripture.verses.map((verse, i) => {
      return <Verse verse={verse} key={i} />;
    });

    return (
      <div className="Scripture">
        {verses.length > 0 ? (
          <SwipeableViews index={this.state.index} onChangeIndex={this.changeIndex} style={{'height': '100%'}}>
            {verses}
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

export default connect(mapStateToProps)(Scripture);
