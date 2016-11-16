'use strict';

class Boxset {
  constructor(data) {
    this._seasonNumber = data.seasonNumber;
    this._year = data.year;
    this._showName = data.showName;
  }

  getTitle() {
    return `${this._showName} (Season ${this._seasonNumber})`;
  }

  getSubtitle() {
    return this._year;
  }
}

module.exports = Boxset;
