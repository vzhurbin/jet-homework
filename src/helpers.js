export const filter = (arr, obj, query, searchKey) => {
    return arr.filter(key => {
      const str = obj[key][searchKey].toUpperCase();
      return str.indexOf(query.toUpperCase()) > -1;
    })
}

export const queryFilter = (obj, search, radio) => {
  let keys = Object.keys(obj);

  if (radio.length > 0 && search.length > 0) {
    keys = filter(keys, obj, radio, 'label');
    keys = filter(keys, obj, search, 'text');
    return keys;
  }

  if (search.length > 0) {
    keys = filter(keys, obj, search, 'text');
    return keys;
  }

  if (radio.length > 0) {
    keys = filter(keys, obj, radio, 'label');
    return keys;
  }

  return keys;
}
