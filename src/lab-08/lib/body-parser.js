'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = (request) => {
  return new Promise((resolve, reject) => {
    if (!request || !request.url) return reject(new Error('Invalid Request Object. Cannot parse'));

    request.url = url.parse(request.url);
    request.url.query = queryString.parse(request.url.query);

    if (!request.method.match(/POST|PUT|PATCH/)) {
      return resolve(request);
    }

    let message = '';

    request.on('data', (data) => {
      message += data.toString();
    });

    request.on('end', () => {
      try {
        request.body = JSON.parse(message);
        return resolve(request);
      } catch (err) {
        return reject(err);
      }
    });

    request.on('error', reject);
    return undefined;
  });
};
