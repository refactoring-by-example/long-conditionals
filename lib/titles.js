'use strict';

const BOOK = 'book';
const BLU_RAY = 'blu-ray';
const VINYL = 'vinyl-record';

const NON_FICTIONAL_BOOK = 'non-fiction';
const TRAVEL_GUIDE = 'travel-guide';
const FILM = 'film';
const BOXSET = 'box-set';

module.exports = (data) => {
  const productType = data.productType;
  const kind = data.kind;

  const isNonFictionalBook = productType === BOOK && kind === NON_FICTIONAL_BOOK;
  const isTravelGuide = productType === BOOK && kind === TRAVEL_GUIDE;
  const isFilm = productType === BLU_RAY && kind === FILM;
  const isBoxset = productType === BLU_RAY && kind === BOXSET;
  const isVinyl = productType === VINYL;

  if (isNonFictionalBook) {
    return {
      title: data.bookTitle,
      subtitle: `${data.author} (${data.year})`
    };
  } else if (isTravelGuide) {
    return {
      title: `${data.publisher}: ${data.city}`,
      subtitle: data.year
    };
  } else if (isFilm) {
    return {
      title: `${data.title} (${data.year})`,
      subtitle: data.director
    };
  } else if (isBoxset) {
    return {
      title: `${data.showName} (Season ${data.seasonNumber})`,
      subtitle: data.year
    };
  } else if (isVinyl) {
    return {
      title: data.albumName,
      subtitle: data.artistName
    };
  }

  return {
    title: data.bookTitle,
    subtitle: data.author
  };
};
