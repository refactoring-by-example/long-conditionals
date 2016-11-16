'use strict';

const NonFictionalBook = require('./nonFictionalBook');
const TravelGuide = require('./travelGuide');
const BluRayFilm = require('./film');
const BluRayBoxSet = require('./boxset');
const VinylRecord = require('./vinyl');
const FictionalBook = require('./fictionalBook');

const PRODUCTS = [
  NonFictionalBook,
  TravelGuide,
  BluRayFilm,
  BluRayBoxSet,
  VinylRecord
];

function getProduct(data) {
  const matches = PRODUCTS.filter(product => product.isMatch(data));
  const Product = matches[0] || FictionalBook;

  return new Product(data);
}

module.exports = (data) => {
  const product = getProduct(data);

  return {
    title: product.getTitle(),
    subtitle: product.getSubtitle()
  };
};
