'use strict';

const logger = require('./logger');
const bodyParser = require('./body-parser');
const customResponse = require('./response');

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
    return (request, response) => {
      Promise.all([bodyParser(request)]) 
        .then(() => {
          // [request.method] = 'GET' 'POST' 'PUT' 'DELETE'
          const requestResponseCallback = this.routes[request.method][request.url.pathname];
          const isFunction = typeof requestResponseCallback === 'function';
          if (isFunction) return requestResponseCallback(request, response);
          console.log(request, 'something something something');
          
          customResponse.sendError(response, 404, 'Route Not Registered');
          return undefined;
        })
        .catch((err) => {
          console.log(err, 'hey my name is error');
          logger.log(logger.INFO, JSON.stringify(err));
          customResponse.sendError(response, 404, 'Route Not Found');
          return undefined;
        });
    };
  }
};

