'use strict';

const NonFictionalBook = require('./nonFictionalBook');
const TravelGuide = require('./travelGuide');
const Film = require('./film');
const Boxset = require('./boxset');
const Vinyl = require('./vinyl');
const FictionalBook = require('./fictionalBook');

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
    const nonFictionalBook = new NonFictionalBook(data);
    return {
      title: nonFictionalBook.getTitle(),
      subtitle: nonFictionalBook.getSubtitle()
    };
  } else if (isTravelGuide) {
    const travelGuide = new TravelGuide(data);
    return {
      title: travelGuide.getTitle(),
      subtitle: travelGuide.getSubtitle()
    };
  } else if (isFilm) {
    const film = new Film(data);
    return {
      title: film.getTitle(),
      subtitle: film.getSubtitle()
    };
  } else if (isBoxset) {
    const boxset = new Boxset(data);
    return {
      title: boxset.getTitle(),
      subtitle: boxset.getSubtitle()
    };
  } else if (isVinyl) {
    const vinyl = new Vinyl(data);
    return {
      title: vinyl.getTitle(),
      subtitle: vinyl.getSubtitle()
    };
  }

  const fictionalBook = new FictionalBook(data);
  return {
    title: fictionalBook.getTitle(),
    subtitle: fictionalBook.getSubtitle()
  };
};
