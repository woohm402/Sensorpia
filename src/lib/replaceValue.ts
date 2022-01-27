export const replaceValue = (obj: Object, key: string, to: string) => {
  const newData = JSON.parse(JSON.stringify(obj))

  let cursor = newData
  const keys = key.split('.')
  keys.slice(0, keys.length - 1).forEach((key) => {
    cursor = cursor[key]
  })

  // @ts-ignore
  cursor[keys[keys.length - 1]] = to

  return newData;
}