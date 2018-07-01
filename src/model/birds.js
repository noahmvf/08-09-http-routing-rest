'use strict';

const uuid = require('uuid/v4');

const storage = require('../lib/storage/main');

module.exports = class Bird {
  constructor(config) {
    this._id = uuid();
    this.name = config.name;
    this.habitat = config.habitat || '';
    this.region = config.region || '';
  }

  save() {
    return storage.save('Birds', this);
  }
};

