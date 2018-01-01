import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../reducers/scripture';
import axios from 'axios';
import './TextareaSection.scss';

//component allows you to add a comment
class TextareaSection extends Component {

  constructor() {
    var comment = localStorage.getItem("comment");
    super();
    this.state = {
      showButtons: comment ? true : false,
      comment: comment ? comment : ""
    }
    this.updateComment = this.updateComment.bind(this);
    this.resize = this.resize.bind(this);
    this.clear = this.clear.bind(this);
    this.save = this.save.bind(this);
  }

  updateComment(e) {
    var comment = e.target.value;
    this.setState({comment: comment}, () => {
      localStorage.setItem("comment", comment);
      this.resize(comment);
    });
  }

  resize(comment) {
    var numLines = comment.split("\n");
    var textarea = document.getElementById("add-comment-id");
    textarea.style.height = ((numLines.length - 1) * 20 + 30) + "px";
    var showButtons = comment ? true : false;
    this.setState({showButtons: showButtons});
  }

  clear() {
    var textarea = document.getElementById("add-comment-id");
    localStorage.setItem("comment", "");
    var reference = this.props.scripture.reference;
    reference.comments = this.props.scripture.comments;
    localStorage.setItem("scripture", JSON.stringify(reference));
    this.setState({showButtons: false, comment: ""});
  }

  save() {
    axios.post("/comment", {
      comment: this.state.comment, _id: this.props.scripture.reference._id
    }).then((response) => {
      if (response.status === 200) {
        this.props.addComment(response.data);
        this.clear();
      }
    });
  }

  render() {
    return (
      <div className="TextareaSection">
        <textarea style={{"height": "30px"}} id="add-comment-id" onChange={this.updateComment}
        placeholder={this.props.placeholder} value={this.state.comment}></textarea>
        {this.state.showButtons ? (
          <div className="buttons">
            <button onClick={this.save}>save</button>
          </div>
        ) : null}
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
  addComment: addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(TextareaSection);
