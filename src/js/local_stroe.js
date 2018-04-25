const STORAGE_KEY = 'cookie-token'
export default {
  getCookie: function () {
    return window.localStorage.getItem(STORAGE_KEY) || ""
  },
  saveCookie: function (item) {
    window.localStorage.setItem(STORAGE_KEY,item);
  }
}
