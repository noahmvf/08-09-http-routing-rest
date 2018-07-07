'use strict';

const bodyParser = require('./body-parser.js');
const customRes = require('./response.js');

module.exports = class Router {
  constructor() {
    this.routes = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE: {},
    };
  }

  get(endpoint, callback) {
    this.routes.GET[endpoint] = callback;
  }

  post(endpoint, callback) {
    this.routes.POST[endpoint] = callback;
  }

  put(endpoint, callback) {
    this.routes.PUT[endpoint] = callback;
  }

  delete(endpoint, callback) {
    this.routes.DELETE[endpoint] = callback;
  }

  route() {
    return (req, res) => {
      Promise.all([bodyParser(req)])
        .then(() => {
          const reqResCallback = this.routes[req.method][req.url.pathname];
          const isFunction = typeof reqResCallback === 'function';
          if (isFunction) return reqResCallback(req, res);

          customRes.sendError(res, 404, 'Route Not Registered');
          return undefined;
        })
        .catch((err) => {
          console.log(err);

          customRes.sendError(res, 404, 'Route Not Found');
          return undefined;
        });
    };
  }
};
