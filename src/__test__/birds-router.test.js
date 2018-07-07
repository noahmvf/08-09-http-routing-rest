// 'use strict';

// const superagent = require('superagent');
// const server = require('../lib/server');
// const Bird = require('../model/birds');

// const apiUrl = 'http://localhost:5000/api/v1/birds';

// const mockResource = {
//   name: 'Mock Bird',
//   habitat: 'Mock Habitat',
//   region: 'Mock Region',
// };

// beforeAll(() => server.start(5000));
// afterAll(() => server.stop());

// describe('POST to /api/v1/birds', () => {
//   test('200 for successful saving of a new bird', () => {
//     return superagent.post(apiUrl)
//       .send(mockResource)
//       .then((response) => {
//         expect(response.body.name).toEqual(mockResource.name);
//         expect(response.body.habitat).toEqual(mockResource.habitat);
//         expect(response.body.region).toEqual(mockResource.region);
//         expect(response.body._id).toBeTruthy();
//         expect(response.status).toEqual(200);
//       })
//       .catch((err) => {
//         throw err;
//       });
//   });

//   test('404 NOT FOUND for a bad request', () => {
//     return superagent.get(apiUrl)
//       .send({})
//       .then((response) => {
//         throw response;
//       })
//       .catch((err) => {
//         expect(err.status).toEqual(404);
//         expect(err).toBeInstanceOf(Error);
//       });
//   });
// });

// describe('GET /api/v1/birds', () => {
//   let mockResourceForGet;
//   beforeEach((done) => {
//     const newBird = new Bird(mockResource);
//     newBird.save()
//       .then((bird) => {
//         mockResourceForGet = bird;
//         done();
//       })
//       .catch((err) => { 
//         throw err;
//       });
//   });

//   test('200 successful GET request', () => {
//     console.log(apiUrl);
//     return superagent.get(`${apiUrl}?id=${mockResourceForGet._id}`)
//       .then((response) => {
//         expect(response.status).toEqual(200);
//         expect(response.body.name).toEqual(mockResourceForGet.name);
//         expect(response.body.habitat).toEqual(mockResourceForGet.habitat);
//         expect(response.body.region).toEqual(mockResourceForGet.region);
//         expect(response.body._id).toBeTruthy();
//       })
//       .catch((err) => {
//         throw err;
//       });
//   });
// });

// describe('DELETE /api/v1/birds', () => {
//   let mockResourceForDelete;

//   beforeEach(() => {
//     const newBird = new Bird(mockResource);
//     return newBird.save()
//       .then((bird) => {
//         mockResourceForDelete = bird;
//       })
//       .catch((err) => {
//         throw err;
//       });
//   });

//   test('200 on successful request', () => {
//     return superagent.delete(`${apiUrl}?id=${mockResourceForDelete._id}`)
//       .then((response) => {
//         expect(response.status).toBe(204);
//       })
//       .catch((err) => {
//         throw err;
//       });
//   });

//   test('404 for resource not found', () => {
//     return superagent.delete((`${apiUrl}?id=00000`))
//       .then((response) => {
//         throw response;
//       })
//       .catch((err) => {
//         expect(err.status).toEqual(404);
//         expect(err).toBeInstanceOf(Error);
//       });
//   });
// });

