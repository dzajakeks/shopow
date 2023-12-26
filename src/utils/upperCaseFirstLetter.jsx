export function upperCaseFirst(str) {
  return str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
}
