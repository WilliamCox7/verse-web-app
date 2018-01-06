import { React } from '../../packages';
import { Nav, Section, TextareaSection, TextSection, Verse } from '../../components';
import { images } from '../../../assets';

export function template(Home) {
  var subSections = Home.props.scripture.comments.map((comment, i) => {
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
      <Section title={'Will'} circleImage={images.me} subSections={subSections} reverse={true} />
    </div>
  );
}

/*
 *  template: what is rendered on the front end
 *
 */
