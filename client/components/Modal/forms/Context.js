import { React, Component, autosize } from '../../../packages';

/**
 * The Context Screen
 * @extends Component
 */

class Context extends Component {

  constructor() {
    super();
    this.state = {
      context: ""
    }
    this.save = this.save.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    let textareas = document.querySelectorAll("textarea.autosize");
    textareas.forEach((textarea) => {
      autosize(textarea);
    });
  }

  update(e) {
    let newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  save() {
    if (this.state.context) {
      this.props.save(this.state);
    } else {
      this.props.error("Missing Context");
    }
  }

  render() {
    return (
      <div className="form">
        <textarea className="autosize" placeholder="context" value={this.state.context} name="context" onChange={this.update}></textarea>
        <button onClick={this.save}>save</button>
      </div>
    );
  }
}

export default Context;
