import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../Section/Section';
import TextSection from '../TextSection/TextSection';
import './Verse.scss';

//component that displays the current verse at the top of the screen
class Verse extends Component {

  render() {

    var book, letter, ref = this.props.scripture.reference;

    if (ref) {
      book = ref.book;
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
        <Section title={book} letter={letter} subSections={[<TextSection text={ref.text} key="verse-section-key" />]} />
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
