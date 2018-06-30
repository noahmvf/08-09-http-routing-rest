'use strict';

const faker = require('faker');
const superagent = require('superagent');
const server = require('../lib/server');
const Bird = require('../model/birds');

const apiUrl = 'http://localhost:5000/api/v1/birds';

const mockResource = {
  name: faker.lorem.words(1),
  habitat: faker.lorem.words(1),
  region: faker.lorem.words(2),
};

beforeAll(() => server.start(5000));
afterAll(() => server.stop());

describe('POST to /api/v1/birds', () => {
  test('200 for successful saving of a new bird', () => {
    return superagent.post(apiUrl)
      .send(mockResource)
      .then((response) => {
        expect(response.body.name).toEqual(mockResource.name);
        expect(response.body.habitat).toEqual(mockResource.habitat);
        expect(response.body._id).toBeTruthy();
        expect(response.status).toEqual(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  test('400 for a bad request', () => {
    return superagent.post(apiUrl)
      .send({})
      .then((response) => {
        throw response;
      })
      .catch((err) => {
        expect(err.status).toEqual(400);
        expect(err).toBeInstanceOf(Error);
      });
  });
});

describe('PUT to /api/v1/birds', () => {
  test('200 PUT for successful update of a resource', () => {
     
  });

  describe('GET /api/v1/birds', () => {
    let mockResourceForGet;
    beforeEach(() => {
      const newBird = new Bird(mockResource);
      newBird.save()
        .then((bird) => {
          mockResourceForGet = bird;
        })
        .catch((err) => {
          throw err;
        });
    });

    test('200 successful GET request', () => {
      return superagent.get(`${apiUrl}?id=${mockResourceForGet._id}`)
        .then((response) => {
          expect(response.status).toEqual(200);
          expect(response.body.name).toEqual(mockResourceForGet.name);
          expect(response.body.habitat).toEqual(mockResourceForGet.habitat);
          expect(response.body.createdOn).toEqual(mockResourceForGet.createdOn.toISOString());
        })
        .catch((err) => {
          throw err;
        });
    });

    test('404 NOT FOUND for GET request', () => {
      return superagent.get(apiUrl)
        .send({})
        .then((response) => {
          throw response;
        })
        .catch((err) => {
          expect(err.status).toEqual(404);
          expect(err).toBeInstanceOf(Error);
        });
    });
  });

  describe('DELETE /api/v1/birds', () => {
    test('200 for successful delete of bird instance', () => {
      return superagent.delete(apiUrl)
        .then((response) => {
          expect(response.body).toBeNull();
        });
    });
  });

  test('404 NOT FOUND for DELETE request', () => {
    return superagent.get(apiUrl)
      .send({})
      .then((response) => {
        throw response;
      })
      .catch((err) => {
        expect(err.status).toEqual(404);
        expect(err).toBeInstanceOf(Error);
      });
  });
});
