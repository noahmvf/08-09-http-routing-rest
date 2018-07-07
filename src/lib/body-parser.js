'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {
  return new Promise((resolve, reject) => {
    if (!req || !req.url) return reject(new Error('Invalid request object; cannot parse'));

    req.url = url.parse(req.url);
    req.url.query = queryString.parse(req.url.query);
    
    if (!req.method.match(/POST|PUT|PATCH/)) {
      return resolve(req);
    }

    let message = '';

    req.on('data', (data) => {
      message += data.toString();
    });
    
    req.on('end', () => {
      try {
        req.body = JSON.parse(message);
        return resolve(req);
      } catch (err) {
        return reject(err);
      }
    });

    req.on('error', reject);
    return undefined;
  });
};
