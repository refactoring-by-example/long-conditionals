'use strict';

class Vinyl {
  constructor(data) {
    this._albumName = data.albumName;
    this._artistName = data.artistName;
  }

  getTitle() {
    return this._albumName;
  }

  getSubtitle() {
    return this._artistName;
  }
}

module.exports = Vinyl;
