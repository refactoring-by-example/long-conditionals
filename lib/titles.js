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

  let product = new FictionalBook(data);
  if (isNonFictionalBook) {
    product = new NonFictionalBook(data);

  } else if (isTravelGuide) {
    product = new TravelGuide(data);

  } else if (isFilm) {
    product = new Film(data);

  } else if (isBoxset) {
    product = new Boxset(data);

  } else if (isVinyl) {
    product = new Vinyl(data);
  }

  return {
    title: product.getTitle(),
    subtitle: product.getSubtitle()
  };
};
