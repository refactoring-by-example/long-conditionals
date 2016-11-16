'use strict';

class Film {
  constructor(data) {
    this._title = data.title;
    this._year = data.year;
    this._director = data.director;
  }

  getTitle() {
    return `${this._title} (${this._year})`;
  }

  getSubtitle() {
    return this._director;
  }
}

module.exports = Film;
