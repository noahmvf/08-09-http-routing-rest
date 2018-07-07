'use strict';

const server = require('./lib/server.js');

const PORT = process.env.PORT; //eslint-disable-line

server.start(PORT, console.log(`listening on PORT: ${PORT}`));

