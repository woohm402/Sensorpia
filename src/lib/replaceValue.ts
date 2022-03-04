export const replaceValue = (obj: Object | null, key: string, to: any) => {
  if (!obj) return obj;

  const newData = JSON.parse(JSON.stringify(obj));

  let cursor = newData;
  const keys = key.split('.');
  keys.slice(0, keys.length - 1).forEach((key) => {
    cursor = cursor[key];
  });

  cursor[keys[keys.length - 1]] = to;

  return newData;
};
