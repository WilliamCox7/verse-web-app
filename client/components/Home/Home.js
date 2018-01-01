import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { set } from '../../reducers/scripture';
import Verse from '../Verse/Verse';
import Nav from '../Nav/Nav';
import Section from '../Section/Section';
import TextSection from '../TextSection/TextSection';
import TextareaSection from '../TextareaSection/TextareaSection';
import me from '../../src/will.jpg';
import './Home.scss';

//container component for main app functionality
class Home extends Component {

  //initializes app with either saved reference or scraped reference
  componentDidMount() {
    var reference = JSON.parse(localStorage.getItem('scripture'));
    if (reference) {
      this.props.set(reference);
    } else {
      axios.get('/scripture?work=bofm&book=1%20Nephi&chap=1&vers=1').then((response) => {
        if (response.status === 200) {
          var reference = response.data[0];
          this.props.set(reference);
          localStorage.setItem('scripture', JSON.stringify(reference));
        } else {
          alert('Could not fetch 1 Nephi 1:1');
          console.log(response);
        }
      });
    }
  }

  render() {

    var subSections = this.props.scripture.comments.map((comment, i) => {
      return (
        <TextSection text={comment.comment} key={i} />
      );
    });

    subSections.unshift(
      <TextareaSection key="add-comment-key" placeholder="add a comment..." />
    );

    return (
      <div className="Home">
        <Nav />
        <Verse />
        <hr/>
        <Section title={'Will'} circleImage={me} subSections={subSections} reverse={true} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scripture: state.scripture
  }
}

const mapDispatchToProps = {
  set: set
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
