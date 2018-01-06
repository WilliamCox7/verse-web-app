import { React } from '../../packages';

export function template(Section) {
  return (
    <div className="Section" style={Section.props.reverse ? {
      "flexDirection": "row-reverse"
    } : null}>
      <div className="section-circle" style={Section.props.reverse ? {
        "marginRight": "0px", "marginLeft": "10px"
      } : null}>
        {Section.props.letter ? (
          <div className="circle">{Section.props.letter}</div>
        ) : (
          <div className="circle">
            <img src={Section.props.circleImage} />
          </div>
        )}
        <span>{Section.props.title}</span>
      </div>
      <div className="subSections">
        {Section.props.subSections}
      </div>
    </div>
  );
}

/*
 *  template: what is rendered on the front end
 *
 */
