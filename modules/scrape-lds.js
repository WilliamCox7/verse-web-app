const axios = require('axios');
const cheerio = require('cheerio');
const insertScripture = require('./insert-scripture');
const translator = require('./translator');

module.exports = (query) => {

  //translates the query parameters for scrape
  _query = translator.prepareForScrape(Object.assign({}, query));
  query.work = _query.work;

  //sets url for scrape
  let url = `https://www.lds.org/scriptures/${_query.work}/${_query.book}/${_query.chap}`;

  return axios.get(url).then((response) => {

    //loads dom to parse elements
    const $ = cheerio.load(response.data);

    //gets the last verse number for the chapter in question
    let lastVerse = $('p.verse').length;

    //determine verse number and trim it
    let verseNo = _query.vers ? _query.vers : lastVerse;
    let verse = $(`p#p${verseNo}.verse`);
    verse[0].children.forEach((child) => {
      if (child.name === "a") {
        $(child.children[0]).remove();
      }
    });

    //remove verse number at beginning of verse text
    verse = verse.text().split(" ");
    verse.shift();
    verse = verse.join(" ");
    query.text = verse;

    //obtain previous/next book/chapter
    let nav = $('ul.prev-next.large')[0];
    let prev = nav.children[0].children[0].attribs.href;
    let next = nav.children[1].children[0].attribs.href;
    prev = prev.split("/");
    next = next.split("/");
    query.prevBook = prev[5].split("?")[0];
    query.prevChap = prev[6] ? Number(prev[6].split("?")[0]) : 1;
    query.nextBook = next[5].split("?")[0];

    if (query.vers === lastVerse) {
      query.nextChap = 1;
    } else {

    }
    query.nextChap = next[6] ? Number(next[6].split("?")[0]) : 1;

    //save last verse information
    query.lastVerse = lastVerse;

    return insertScripture(query);

  });

}
