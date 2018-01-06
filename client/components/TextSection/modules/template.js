import { React } from '../../packages';

export function template(TextSection) {
  return (
    <div className="TextSection">
      <pre>{TextSection.props.text}</pre>
    </div>
  );
}

/*
 *  template: what is rendered on the front end
 *
 */
