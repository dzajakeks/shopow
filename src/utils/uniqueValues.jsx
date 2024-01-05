export function getUniqueValues(data, type) {
  let unique = data.map((item) => {
    return item[type];
  });
  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
}
