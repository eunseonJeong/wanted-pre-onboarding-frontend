//value 읽어 오기
export const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};
//item 삭제
export const removeLocalStorage = (name) => {
  return localStorage.removeItem(name);
};
//key, value 추가
export const setLocalStorage = (name) => {
  return localStorage.setItem(name);
};
