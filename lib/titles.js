'use strict';

module.exports = (data) => {
  const titles = {};
  const productType = data.productType;
  const kind = data.kind;

  if (productType === 'book' && kind === 'non-fiction') {
    titles.title = data.bookTitle;
    titles.subtitle = `${data.author} (${data.year})`;
  } else if (productType === 'book' && kind === 'travel-guide') {
    titles.title = `${data.publisher}: ${data.city}`;
    titles.subtitle = data.year;
  } else if (productType === 'blu-ray' && kind === 'film') {
    titles.title = `${data.title} (${data.year})`;
    titles.subtitle = data.director;
  } else if (productType === 'blu-ray' && kind === 'box-set') {
    titles.title = `${data.showName} (Season ${data.seasonNumber})`;
    titles.subtitle = data.year;
  } else if (productType === 'vinyl-record') {
    titles.title = data.albumName;
    titles.subtitle = data.artistName;
  } else {
    titles.title = data.bookTitle;
    titles.subtitle = data.author;
  }

  return titles;
};
