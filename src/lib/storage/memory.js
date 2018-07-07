'use strict';

const storage = module.exports = {};

const memory = {};

storage.save = (schema, item) => {
  return new Promise((resolve, reject) => {
    if (!schema) return reject(new Error('Missing schema'));
    if (!item || !item.nameEng) return reject(new Error('Item or name required'));
    
    if (!memory[schema]) memory[schema] = {};
    memory[schema][item._id] = item;
    console.log(`STORAGE: Created new resource ${JSON.stringify(item)}`);
    return resolve(item);
  });
};

storage.get = (schema, _id) => {
  if (memory[schema][_id]) {
    console.log(`STORAGE: fetching ${JSON.stringify(memory[schema][_id], null, 2)}`);
    return Promise.resolve(memory[schema][_id]);
  }
  return Promise.reject(new Error(`${_id} not found`));
};

storage.delete = (schema, _id) => {
  if (memory[schema][_id]) {
    delete memory[schema][_id];
    console.log(`STORAGE: ${_id} deleted`);
    return Promise.resolve(memory[schema]);
  }
  return Promise.reject(new Error(`${_id} not found`));
};
