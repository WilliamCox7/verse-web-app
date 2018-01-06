import { React } from '../../packages';

export function template(TextareaSection) {
  return (
    <div className="TextareaSection">
      <textarea style={{"height": "30px"}} id="add-comment-id" onChange={TextareaSection.updateComment}
      placeholder={TextareaSection.props.placeholder} value={TextareaSection.state.comment}></textarea>
      {TextareaSection.state.showButtons ? (
        <div className="buttons">
          <button onClick={TextareaSection.save}>save</button>
        </div>
      ) : null}
    </div>
  );
}

/*
 *  template: what is rendered on the front end
 *
 */
