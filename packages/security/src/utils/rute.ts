export const getPaths = (prefix: string = "", path: string) => {
  if (!prefix) return path;
  if (typeof path === "string") {
    return `${prefix}${path}`;
  }
  if (Array.isArray(path))
    throw new Error("Array path is not longer supported");

  return path;
};
