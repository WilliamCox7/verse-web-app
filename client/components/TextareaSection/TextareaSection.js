import { Component, connect } from '../packages';
import { construct, template, mapStateToProps, mapDispatchToProps } from './modules';
import './TextareaSection.scss';

class TextareaSection extends Component {

  constructor() {
    super();
    construct(this);
  }

  render() {
    return template(this);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TextareaSection);

/*
 *  TextareaSection: component allows you to add a comment
 *
 */
