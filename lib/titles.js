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

function getProduct(data) {
  const productType = data.productType;
  const kind = data.kind;

  const isNonFictionalBook = productType === BOOK && kind === NON_FICTIONAL_BOOK;
  const isTravelGuide = productType === BOOK && kind === TRAVEL_GUIDE;
  const isFilm = productType === BLU_RAY && kind === FILM;
  const isBoxset = productType === BLU_RAY && kind === BOXSET;
  const isVinyl = productType === VINYL;

  if (isNonFictionalBook) {
    return new NonFictionalBook(data);

  } else if (isTravelGuide) {
    return new TravelGuide(data);

  } else if (isFilm) {
    return new Film(data);

  } else if (isBoxset) {
    return new Boxset(data);

  } else if (isVinyl) {
    return new Vinyl(data);
  }

  return new FictionalBook(data);
}

module.exports = (data) => {
  const product = getProduct(data);

  return {
    title: product.getTitle(),
    subtitle: product.getSubtitle()
  };
};
