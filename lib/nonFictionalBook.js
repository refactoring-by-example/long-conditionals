'use strict';

class NonFictionalBook {
  constructor(data) {
    this._bookTitle = data.bookTitle;
    this._author = data.author;
    this._year = data.year;
  }

  getTitle() {
    return this._bookTitle;
  }

  getSubtitle() {
    return `${this._author} (${this._year})`;
  }
}

module.exports = NonFictionalBook;
