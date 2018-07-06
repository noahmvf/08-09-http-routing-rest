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

  // findOne(_id) {
  //   return storage.get('Birds', _id, this);
  // }

  // delete(_id) {
  //   return storage.delete('Birds', _id, this);
  // }
};

