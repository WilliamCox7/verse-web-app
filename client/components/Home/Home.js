import { Component, connect } from '../packages';
import { componentDidMount, template, mapStateToProps, mapDispatchToProps } from './modules';
import './Home.scss';

class Home extends Component {

  componentDidMount() {
    componentDidMount(this);
  }

  render() {
    return template(this);
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/*
 *  Home: container component for main app functionality
 *    - displays most everything in the app
 *
 */
