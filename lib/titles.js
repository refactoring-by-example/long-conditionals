'use strict';

const BOOK = 'book';
const BLU_RAY = 'blu-ray';
const VINYL = 'vinyl-record';

const NON_FICTIONAL_BOOK = 'non-fiction';
const TRAVEL_GUIDE = 'travel-guide';
const FILM = 'film';
const BOXSET = 'box-set';

module.exports = (data) => {
  const titles = {};
  const productType = data.productType;
  const kind = data.kind;

  if (productType === BOOK && kind === NON_FICTIONAL_BOOK) {
    titles.title = data.bookTitle;
    titles.subtitle = `${data.author} (${data.year})`;
  } else if (productType === BOOK && kind === TRAVEL_GUIDE) {
    titles.title = `${data.publisher}: ${data.city}`;
    titles.subtitle = data.year;
  } else if (productType === BLU_RAY && kind === FILM) {
    titles.title = `${data.title} (${data.year})`;
    titles.subtitle = data.director;
  } else if (productType === BLU_RAY && kind === BOXSET) {
    titles.title = `${data.showName} (Season ${data.seasonNumber})`;
    titles.subtitle = data.year;
  } else if (productType === VINYL) {
    titles.title = data.albumName;
    titles.subtitle = data.artistName;
  } else {
    titles.title = data.bookTitle;
    titles.subtitle = data.author;
  }

  return titles;
};
