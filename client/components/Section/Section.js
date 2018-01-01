import React, { Component } from 'react';
import './Section.scss';

//component that displays a section of the app
class Section extends Component {

  render() {
    return (
      <div className="Section" style={this.props.reverse ? {
        "flexDirection": "row-reverse"
      } : null}>
        <div className="section-circle" style={this.props.reverse ? {
          "marginRight": "0px", "marginLeft": "10px"
        } : null}>
          {this.props.letter ? (
            <div className="circle">{this.props.letter}</div>
          ) : (
            <div className="circle">
              <img src={this.props.circleImage} />
            </div>
          )}
          <span>{this.props.title}</span>
        </div>
        <div className="subSections">
          {this.props.subSections}
        </div>
      </div>
    );
  }
}

export default Section;
