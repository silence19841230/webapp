<template>

<div>

  <!--<van-row>-->
    <!--<van-col span="4"></van-col>-->
    <!--<van-col >-->
      <van-nav-bar title="登录" />

      <van-row><van-col style="height: 100px;"></van-col></van-row>
      <van-row>
        <van-col offset="1" span="22" >
          <!--<van-cell-group>-->
            <van-field
              v-model="username"
              label="用户名"
              icon="clear"
              placeholder="请输入用户名"
              required
              @click-icon="username = ''"
            />

            <van-field
              v-model="password"
              type="password"
              label="密码"
              icon="clear"
              placeholder="请输入密码"
              required
              @click-icon="password = ''"
            />

        </van-col>
      </van-row>
      <van-row><van-col style="height: 20px;"></van-col></van-row>
      <van-row><van-col offset="2" span="20" align="center"><van-button style="width: 160px;" type="primary" @click="login()">登录</van-button></van-col></van-row>
      <!--   v-bind:loading="loading" v-bind:disabled="loading"  -->

  <!--<iframe src="http://www.baidu.com" width="100%" height="20%" frameborder="1"  marginwidth="0" marginheight="0" scrolling="no"></iframe>-->
  <!--</van-col>-->
    <!--<van-col span="4"></van-col>-->
  <!--</van-row>-->

</div>




</template>



<script>




import axios from "axios";
import Common from "../js/common";
import Cookie from "../js/cookie";

// import jQuery from 'jquery'
import layer from 'layui-layer'
// import jQuery from '../js/jquery/1.12.4/jquery.min.js'

export default {
  name: 'Login',
  data: function () {
    return {
      username:'admin',
      password:'adminkeyun',
      loading:false
    }
  },

  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    to.meta.keepAlive = false; // 让 Course 不缓存
    next();
  },

  methods: {
    login: function () {


      // this.$nextTick(function () {
      //   layer.open({
      //     type: 2,
      //     title: 'layer mobile页',
      //     shadeClose: true,
      //     shade: 0.4,
      //     maxmin: true,
      //     area: ['380px', '90%'],
      //     content: 'http://www.baidu.com' //iframe的url
      //   });
      // });


       var self = this;
       this.loading = false;
       axios({
          method: Common.method_post,
          url: Common.baseUrl+'/token',
          contentType: Common.contentType,
          dataType:Common.dataType,
          data : {
                lang: Common.lang,
                agent: Common.agent,
                intfVer: Common.intfVer,
                payload: {
                    params: {
                        username:this.username,
                        password:this.password
                    }
                }
          },
        })
        .then(function (response) {
          self.loading = true;
          if(response.data.ok){
              Cookie.setCookie(Common.cookie_key,response.data.data.token,Common.cookie_seconds);
              self.$router.push("/course");
          }

        })
        .catch(function (response) {
          console.log(response);
        });

    }
  }


}

</script>

<style scoped>
</style>
