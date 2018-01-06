import { React } from '../../packages';
import { Section, TextSection } from '../../components';

export function template(Verse) {
  var book, letter, ref = Verse.props.scripture.reference;

  if (ref) {
    book = ref.book;
    if (book) {
      if (isNaN(book[0])) {
        letter = book[0].toUpperCase();
      } else {
        var temp = book.split(" ");
        temp.shift();
        temp = temp.join(" ");
        letter = temp[0].toUpperCase();
      }
    }
  }

  return (
    <div className="Verse">
      <Section title={book} letter={letter} subSections={[<TextSection text={ref.text} key="verse-section-key" />]} />
    </div>
  );
}

/*
 *  template: what is rendered on the front end
 *
 */
