import React, { Component } from 'react';
import './TextSection.scss';

//component that displays plain text
class TextSection extends Component {

  render() {
    return (
      <div className="TextSection">
        <pre>{this.props.text}</pre>
      </div>
    );
  }
}

export default TextSection;
