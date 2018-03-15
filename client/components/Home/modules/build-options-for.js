import { React } from '../../../packages';
import options from '../options.json';

export function buildOptionsFor(component) {
  let works = getWorks(component);
  let books = getBooks(works.arr, component);
  let chapters = getChapters(works.arr, books.arr, component);
  let verses = getVerses(works.arr, books.arr, chapters.arr, component);
  return {
    works: works,
    books: books,
    chapters: chapters,
    verses: verses
  }
}

function getWorks(component) {
  return loopThrough(options, component, 'workIndex');
}

function getBooks(works, component) {
  let work = works[component.state.workIndex];
  return loopThrough(options[work], component, 'bookIndex');
}

function getChapters(works, books, component) {
  let work = works[component.state.workIndex];
  let book = books[component.state.bookIndex];
  return loopThrough(options[work][book], component, 'chapIndex');
}

function getVerses(works, books, chapters, component) {
  let work = works[component.state.workIndex];
  let book = books[component.state.bookIndex];
  let chap = chapters[component.state.chapIndex];
  let numVerses = options[work][book][chap];
  let verseOptions = [], spans = [];
  for (var i = 0; i < numVerses; i++) {
    verseOptions.push(
      <option value={i} key={i}>{i+1}</option>
    );
    spans.push(
      <span key={i} className={component.state.versIndex === i ? "active" : null} data-key={i}
        onClick={(e) => component.changeIndexFromSpan(e, 'versIndex')}>{i+1}</span>
    );
  }
  return {
    options: verseOptions,
    spans: spans
  };
}

function loopThrough(obj, component, indexToUpdate) {
  let arr = [], options = [], spans = [], i = 0;
  for (var prop in obj) {
    arr.push(prop);
    options.push(
      <option value={i} key={i}>{prop}</option>
    );
    spans.push(
      <span key={i} className={component.state[indexToUpdate] === i ? "active" : null} data-key={i}
        onClick={(e) => component.changeIndexFromSpan(e, indexToUpdate)}>{prop}</span>
    );
    i++;
  }
  return {
    options: options,
    spans: spans,
    arr: arr
  };
}
