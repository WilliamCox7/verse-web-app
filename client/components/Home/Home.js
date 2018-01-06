import { Component, connect } from '../packages';
import { construct, componentDidMount, template, mapStateToProps, mapDispatchToProps } from './modules';
import './Home.scss';

class Home extends Component {

  constructor() {
    super();
    construct(this);
  }

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
