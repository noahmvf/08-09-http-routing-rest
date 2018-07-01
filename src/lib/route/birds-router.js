'use strict';

const Bird = require('../../model/birds');
const logger = require('../logger');
const customResponse = require('../response');

module.exports = (router) => {
  router.post('/api/v1/birds', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-BIRDS: POST /api/v1/birds');
    const newBird = new Bird(request.body);
    newBird.save()
      .then((bird) => {
        customResponse.sendJSON(response, 200, bird);
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.INFO, `ROUTE-BIRDS: There was a bad request ${JSON.stringify(err.message)}`);
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

  router.delete('/api/v1/birds', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-BIRD: DELETE /api/v1/birds');

    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an id');
      return undefined;
    }

    Bird.deleteOne(request.url.query.id)
      .then((birdId) => {
        customResponse.sendJSON(response, 204, birdId);
      })
      .catch((err) => {
        customResponse.sendError(response, 404, err.message);
      });
    return undefined;
  });
};
