import { axios } from '../../packages';

export function save() {
  axios.post("/comment", {
    comment: this.state.comment, _id: this.props.scripture.reference._id
  }).then((response) => {
    if (response.status === 200) {
      this.props.addComment(response.data);
      this.clear();
    }
  });
}

/*
 *  save: this saves the comment to the server
 *
 */
