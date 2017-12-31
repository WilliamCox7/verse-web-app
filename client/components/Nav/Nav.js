import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set } from '../../reducers/scripture';
import axios from 'axios';
import './Nav.scss';

//navigation component that allows user to select scripture reference
class Nav extends Component {

  constructor() {
    super();
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  prev() {
    var reference = this.props.scripture.reference;
    var vers = reference.vers;
    if (vers > 1) { vers--; }
    else { vers = undefined; }
    this.sendRequest(reference.prevBook, reference.prevChap, vers);
  }

  next() {
    var reference = this.props.scripture.reference;
    var vers = reference.vers;
    if (vers < reference.lastVerse) { vers++; }
    else { vers = 1; }
    this.sendRequest(reference.prevBook, reference.prevChap, vers);
  }

  sendRequest(book, chap, vers) {
    axios.get(`/scripture?work=bofm&book=${book}&chap=${chap}&vers=${vers}`).then((response) => {
      if (response.status === 200) {
        var reference = response.data[0];
        this.props.set(reference);
        localStorage.setItem('scripture', JSON.stringify(reference));
      } else {
        var showVerse = vers ? ':' + vers : ':1';
        alert(`Could not fetch ${book} ${chap}${showVerse}`);
        console.log(response);
      }
    });
  }

  render() {
    return (
      <div className="Nav">
        <h1>The Book of Mormon</h1>
        <div className="nav-buttons">
          <span className="prev" onClick={this.prev}><i className="fa fa-angle-left" aria-hidden="true"></i></span>
          <span className="next" onClick={this.next}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
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

const mapDispatchToProps = {
  set: set
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
