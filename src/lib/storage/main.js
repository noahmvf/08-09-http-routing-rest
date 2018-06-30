'use strict';

const fileSystem = require('./file-system');
const memory = require('./memory');

module.exports = process.env.STORAGE === 'filesystem' ? fileSystem : memory;
