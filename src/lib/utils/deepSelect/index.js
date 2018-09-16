const deepSelect = (obj, query, def) => {
  const innerQuery = query.split ? query.split('.') : query;
  let currentObj = obj;

  do {
    currentObj = (currentObj || {})[innerQuery.shift()];
  } while (innerQuery.length);
  return currentObj === undefined ? def : currentObj;
};

export default deepSelect;
