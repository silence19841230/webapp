import axios from 'axios'
import log from './log'
import common from './common'
import cookie from './cookie'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers = common.generAuthHeader(cookie.getCookie(common.cookie_key));
axios.defaults.baseURL = 'http://www.popacct.cc/popacct/rest/tm';
// axios.defaults.baseURL = 'http://localhost:8080/rest/tm';
axios.defaults.method = common.method_post;

// //POST传参序列化
// axios.interceptors.request.use((config) => {
//     if(config.method  === 'post'){
//         // config.data = qs.stringify(config.data);
//     }
//     return config;
// },(error) =>{
//      log.e("错误的传参", 'fail');
//     return Promise.reject(error);
// });

// //返回状态判断
// axios.interceptors.response.use((res) =>{
//     if(!res.data.success){
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     log.e("网络异常", 'fail');
//     return Promise.reject(error);
// });

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers =  common.generAuthHeader(cookie.getCookie(common.cookie_key));
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    login(params) {
        return fetch('/token', params)
    },
    getContents(params){
      return fetch('/course/catalog/contents', params)
    },
    getCatalogs(params){
      return fetch('/course/catalogs', params)
    },
    getCourses(params){
      return fetch('/courses', params)
    },
    getQuestions(params){
      return fetch('/course/catalog/content/questions', params)
    },


}
