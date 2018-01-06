import { Component, connect } from '../packages';
import { construct, template, mapStateToProps, mapDispatchToProps } from './modules';
import './Nav.scss';

class Nav extends Component {

  constructor() {
    super();
    construct(this);
  }

  render() {
    return template(this);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

/*
 *  Nav: navigation system for the webapp
 *    - allows you to go to the next or previous verse
 *    - allows you to search for a verse
 *    - appears for all routes at the top of the app
 *
 */
