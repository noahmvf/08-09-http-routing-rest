'use strict';

const fileSystem = require('./file-system.js');
const memory = require('./memory.js');

require('dotenv').config();

module.exports = process.env.STORAGE === 'filesystem' ? fileSystem : memory;
