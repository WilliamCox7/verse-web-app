import { React, Component, withRouter } from '../../packages';
import './style.scss';

/**
 * The Home Screen
 * @extends Component
 */

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

export default withRouter(Home);
