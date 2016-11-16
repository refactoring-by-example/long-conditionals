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

  const isNonFictionalBook = productType === BOOK && kind === NON_FICTIONAL_BOOK;
  const isTravelGuide = productType === BOOK && kind === TRAVEL_GUIDE;
  const isFilm = productType === BLU_RAY && kind === FILM;
  const isBoxset = productType === BLU_RAY && kind === BOXSET;
  const isVinyl = productType === VINYL;

  if (isNonFictionalBook) {
    titles.title = data.bookTitle;
    titles.subtitle = `${data.author} (${data.year})`;
  } else if (isTravelGuide) {
    titles.title = `${data.publisher}: ${data.city}`;
    titles.subtitle = data.year;
  } else if (isFilm) {
    titles.title = `${data.title} (${data.year})`;
    titles.subtitle = data.director;
  } else if (isBoxset) {
    titles.title = `${data.showName} (Season ${data.seasonNumber})`;
    titles.subtitle = data.year;
  } else if (isVinyl) {
    titles.title = data.albumName;
    titles.subtitle = data.artistName;
  } else {
    titles.title = data.bookTitle;
    titles.subtitle = data.author;
  }

  return titles;
};
