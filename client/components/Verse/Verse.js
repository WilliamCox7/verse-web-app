import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Verse.scss';

//component that displays the current verse at the top of the screen
class Verse extends Component {

  render() {

    var book, letter;

    if (this.props.scripture.reference) {
      book = this.props.scripture.reference.book;
      if (book) {
        if (isNaN(book[0])) {
          letter = book[0].toUpperCase();
        } else {
          var temp = book.split(" ");
          temp.shift();
          temp = temp.join(" ");
          letter = temp[0].toUpperCase();
        }
      }
    }

    return (
      <div className="Verse">
        <div className="verse-circle">
          <div className="circle">{letter}</div>
          <span>{book}</span>
        </div>
        <div className="text">
          {this.props.scripture.reference.text}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture
  }
}

export default connect(mapStateToProps)(Verse);
