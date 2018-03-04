export const filterObject = (obj, query, searchKey='text') => (
  Object.keys(obj).filter(key => {
    const str = obj[key][searchKey];
    return str.indexOf(query) > -1;
  })
);
