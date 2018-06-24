'use strict';

const Bird = require('../model/birds');
const logger = require('../lib/logger');
const customResponse = require('../lib/response');

module.exports = (router) => {
  router.post('/api/v1/birds', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-BIRD: POST /api/v1/birds');
    const newBird = new Bird(request.body);
    newBird.save()
      .then((bird) => {
        customResponse.sendJSON(response, 200, bird);
        return undefined;
      });
  });

  router.get('/api/v1/birds', (request, response) => {
    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an id');
      return undefined;
    }

    Bird.findOne(request.url.query.id)
      .then((bird) => {
        customResponse.sendJSON(response, 200, bird);
      })
      .catch((err) => {
        console.log(err);
        customResponse.sendError(response, 404, err.message);
      });
    return undefined;
  });

  // router.put('/api/v1/birds', (request, response) => {
  //   if (!request.url.query.id) {
  //     customResponse.sendError(response, 404, 'Your request requires an id');
  //     return undefined;
  //   }

  //   Bird.update
  //   (request.url.query.id)
  //     .then((bird) => {

  //     })

  // });
};
