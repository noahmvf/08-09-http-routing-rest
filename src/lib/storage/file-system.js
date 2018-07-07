'use strict';

const fs = require('fs');

const storage = module.exports = {};
const dataDirectory = `${__dirname}/../../data`;

storage.save = (schema, item) => {
  const file = `${dataDirectory}/${schema}/${item._id}.json`;
  const json = JSON.stringify(item);

  return new Promise((resolve, reject) => {
    if (!schema) return reject(new Error('Missing schema'));
    if (!item || !item.nameEng) return reject(new Error('Missing item'));

    fs.writeFile(file, json, (err) => {
      if (err) return reject(err);
      return resolve(item);
    });
    return undefined;
  });
};

storage.get = (schema, _id) => {
  const targetFile = `${dataDirectory}/${schema}/${_id}.json`;
  
  return new Promise((resolve, reject) => {
    fs.readFile(targetFile, (err, data) => {
      if (err) return reject(err);
      return resolve(JSON.parse(data.toString()));
    });
  });
};

storage.delete = (schema, _id) => {
  const targetFile = `${dataDirectory}/${schema}/${_id}.json`;

  return new Promise((resolve, reject) => {
    fs.unlink(targetFile, (err) => {
      if (err) return reject(err);
      return resolve(targetFile);
    });
  });
};
