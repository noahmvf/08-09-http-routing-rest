'use strict';

const uuid = require('uuid/v4');

module.exports = class Bird {
  constructor(config) {
    this._id = uuid();
    this.createdOn = new Date();
    this.name = config.name;
    this.habitat = config.habitat || '';
    this.region = config.region || '';
  }
};

