export default {
    i: function (item) {
        console.log("[info]请求结果:" + JSON.stringify(item));
    },
    e: function (item) {
      console.log("[error]请求结果:" + JSON.stringify(item));
    }
}
