export const getLocal = (name) => {
  return localStorage.getItem(name);
};

export const removeLocal = (name) => {
  return localStorage.remove(name);
};
