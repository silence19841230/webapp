import Vue from 'vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import App from './App'
import Log from "./js/log";
import Cookie from "./js/cookie";
import Common from "./js/common";
// import layer from './assets/libs/layer/layer'
// import './assets/libs/layer/theme/default/layer.css'




Vue.use(Vant);

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {

    var userInfo= Cookie.getCookie(Common.cookie_key);//获取浏览器缓存的用户信息
    if (!userInfo) {  // 自己的判断条件
      next({
        path: '/', // 重定向后的路由
        query: { redirect: to.fullPath } // 登录成功之后可以根据query中的内容跳转回原来的路由(页面)
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
