import { React } from '../../packages';
import { images } from '../../../assets';

export function template(Nav) {
  var ref = Nav.props.scripture.reference;
  var displayReference = ref.book + ' ' + ref.chap + ':' + ref.vers;
  return (
    <div className="Nav">
      <form onSubmit={Nav.search}>
        <input type="text" value={Nav.state.search} onChange={Nav.updateSearch} placeholder={displayReference} />
      </form>
      <img src={images.logoSmall} />
      <div className="nav-buttons">
        <span className="prev" onClick={Nav.prev}><i className="fa fa-angle-left" aria-hidden="true"></i></span>
        <span className="next" onClick={Nav.next}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
      </div>
    </div>
  );
}

/*
 *  template: what is rendered on the front end
 *
 */
