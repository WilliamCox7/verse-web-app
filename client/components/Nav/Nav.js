import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set } from '../../reducers/scripture';
import axios from 'axios';
import logo from '../../src/logo-small.png';
import './Nav.scss';

//navigation component that allows user to select scripture reference
class Nav extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
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
    return axios.get(`/scripture?work=bofm&book=${book}&chap=${chap}&vers=${vers}`).then((response) => {
      if (response.status === 200) {
        var reference = response.data[0];
        this.props.set(reference);
        localStorage.setItem('scripture', JSON.stringify(reference));
        return true;
      } else {
        var showVerse = vers ? ':' + vers : ':1';
        alert(`Could not fetch ${book} ${chap}${showVerse}`);
        console.log(response);
        return false;
      }
    });
  }

  search() {
    var book = "", chap, vers, count = 0;
    var ref = this.state.search;
    ref = ref.split(" ");
    ref.forEach((part) => {
      if (part.indexOf(":") === -1) {
        if (count > 0) {
          book += " " + part;
        } else {
          book += part;
        }
      } else {
        part = part.split(":");
        chap = part[0];
        vers = part[1];
      }
    });
    this.sendRequest(book, chap, vers).then((success) => {
      if (success) {
        this.setState({search: ""});
      }
    });

  }

  updateSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {

    var ref = this.props.scripture.reference;
    var displayReference = ref.book + ' ' + ref.chap + ':' + ref.vers;

    return (
      <div className="Nav">
        <form onSubmit={this.search}>
          <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder={displayReference} />
        </form>
        <img src={logo} />
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
