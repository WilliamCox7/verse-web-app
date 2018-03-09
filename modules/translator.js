module.exports = {

  //this changes the query string to its abbreviated form
  prepareForScrape: (reference) => {
    [ot, nt, bofm, dc, pgp].forEach((work, i) => {
      if (work.hasOwnProperty(reference.book)) {
        reference.book = work[reference.book];
        i === 0 ? reference.work = 'ot' : reference.work;
        i === 1 ? reference.work = 'nt' : reference.work;
        i === 2 ? reference.work = 'bofm' : reference.work;
        i === 3 ? reference.work = 'dc-testament' : reference.work;
        i === 4 ? reference.work = 'pgp' : reference.work;
      }
    });
    return reference;
  },

  //this changes the reference for display on client
  prepareForClient: (reference) => {
    [ot, nt, bofm, dc, pgp].forEach((work, i) => {
      for (var prop in work) {
        if (work[prop] === reference.prevBook) {
          reference.prevBook = prop;
        }
        if (work[prop] === reference.nextBook) {
          reference.nextBook = prop;
        }
      }
    });
    return reference;
  }

}

//map of scriptural book names to lds.org abbreviations
const ot = {
  'Genesis': 'gen', 'Exodus': 'ex', 'Leviticus': 'lev', 'Numbers': 'num',
  'Deuteronomy': 'deut', 'Joshua': 'josh', 'Judges': 'judg', 'Ruth': 'ruth',
  '1 Samuel': '1-sam', '2 Samuel': '2-sam', '1 Kings': '1-kgs', '2 Kings': '1-kgs',
  'Ezra': 'ezra', 'Nehemiah': 'neh', 'Esther': 'esth', 'Job': 'job',
  'Psalms': 'ps', 'Proverbs': 'prov', 'Ecclesiastes': 'eccl', 'Song of Solomon': 'song',
  'Isaiah': 'isa', 'Jeremiah': 'jer', 'Lamentations': 'lam', 'Ezekiel': 'ezek',
  'Daniel': 'dan', 'Hosea': 'hosea', 'Joel': 'joel', 'Amos': 'amos',
  'Obadiah': 'obad', 'Jonah': 'jonah', 'Micah': 'micah', 'Nahum': 'nahum',
  'Habakkuk': 'hab', 'Zephaniah': 'zeph', 'Haggai': 'hag', 'Zechariah': 'zech',
  'Malachi': 'mal'
}

const nt = {
  'Matthew': 'matt', 'Mark': 'mark', 'Luke': 'luke',
  'John': 'john', 'Acts': 'acts', 'Romans': 'rom', '1 Corinthians': '1-cor',
  '2 Corinthians': '2-cor', 'Galations': 'gal', 'Ephesians': 'eph', 'Philippians': 'philip',
  'Colossians': 'col', '1 Thessalonians': '1-thes', '2 Thessalonians': '2-thes', '1 Timothy': '1-tim',
  '2 Timothy': '2-tim', 'Titus': 'titus', 'Philemon': 'philem', 'Hebrews': 'heb',
  'James': 'james', '1 Peter': '1-pet', '2 Peter': '2-pet', '1 John': '1-jn',
  '2 John': '2-jn', '3 John': '3-jn', 'Jude': 'jude', 'Revelation': 'rev'
}

const bofm = {
  '1 Nephi': '1-ne', '2 Nephi': '2-ne', 'Jacob': 'jacob', 'Enos': 'enos',
  'Jarom': 'jarom', 'Omni': 'omni', 'Words of Mormon': 'w-of-m', 'Mosiah': 'mosiah',
  'Alma': 'alma', 'Helaman': 'hel', '3 Nephi': '3-ne', '4 Nephi': '4-ne',
  'Mormon': 'morm', 'Ether': 'ether', 'Moroni': 'moro'
}

const dc = {
  'Doctrine and Covenants': 'dc'
}

const pgp = {
  'Moses': 'moses', 'Abraham': 'abr', 'Joseph Smith-Matthew': 'js-m', 'Joseph Smith-History': 'js-h',
  'Articles of Faith': 'a-of-f'
}
