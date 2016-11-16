'use strict';

const NonFictionalBook = require('./nonFictionalBook');
const TravelGuide = require('./travelGuide');
const Film = require('./film');
const Boxset = require('./boxset');
const Vinyl = require('./vinyl');
const FictionalBook = require('./fictionalBook');

function getProduct(data) {
  if (NonFictionalBook.isMatch(data)) {
    return new NonFictionalBook(data);

  } else if (TravelGuide.isMatch(data)) {
    return new TravelGuide(data);

  } else if (Film.isMatch(data)) {
    return new Film(data);

  } else if (Boxset.isMatch(data)) {
    return new Boxset(data);

  } else if (Vinyl.isMatch(data)) {
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
