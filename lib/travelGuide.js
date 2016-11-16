'use strict';

class TravelGuide {
  constructor(data) {
    this._publisher = data.publisher;
    this._city = data.city;
    this._year = data.year;
  }

  getTitle() {
    return `${this._publisher}: ${this._city}`;
  }

  getSubtitle() {
    return this._year;
  }
}

module.exports = TravelGuide;
