<template>

  <div>
    <van-nav-bar title="财务课程" left-text="" left-arrow @click-left="onClickLeft"/>

    <div style="height: 10px;"></div>

    <van-row>

      <van-col offset="1" span="22">

        <van-row>
          <van-col span="8" align="left">积分：{{$store.getters.status.jifen}}</van-col>
          <van-col span="8" align="center"><van-progress color="#f09000" :show-pivot="false" v-bind:percentage="time*5" style="width: 100%;margin-top: 8px;"/></van-col>
          <van-col span="8" align="right">{{$store.getters.status.current+1}}/{{total}}</van-col>
        </van-row>

        <div style="height: 10px;"></div>

        <div v-if="showTm">

          <van-row>
            <van-col span="24" align="left"><van-tag type="primary" >第{{$store.getters.status.current+1}}题：</van-tag>【{{$store.getters.txing_cn($store.getters.status.current)}}】</van-col>
            <van-col span="24" align="left"><p class="p_well">{{$store.getters.list[$store.getters.status.current].tg}}</p></van-col>
          </van-row>

          <van-row>
            <van-col span="24" align="left">

              <!--<div v-if="txing==='duoxuan'">-->

                <!--<van-checkbox-group v-model="selected" v-bind:disabled="checkDaBoolean">-->
                  <!--<van-checkbox shape="square" name="A" class="radio_check_padding"><van-row><van-col span="2"></van-col>A、{{tm_A}}</van-row></van-checkbox><br>-->
                  <!--<van-checkbox shape="square" name="B" class="radio_check_padding"> <van-row><van-col span="2"></van-col>B、{{tm_B}}</van-row></van-checkbox><br>-->
                  <!--<van-checkbox shape="square" name="C" class="radio_check_padding"> <van-row><van-col span="2"></van-col>C、{{tm_C}}</van-row></van-checkbox><br>-->
                  <!--<van-checkbox shape="square" name="D" class="radio_check_padding"> <van-row><van-col span="2"></van-col>D、{{tm_D}}</van-row></van-checkbox><br>-->
                <!--</van-checkbox-group>-->

              <!--</div>-->

              <!--<div v-if="txing==='danxuan'">-->

                <!--<van-radio-group v-model="selected" v-bind:disabled="checkDaBoolean">-->
                  <!--<van-row><van-col span="2"><van-radio name="A" class="radio_check_padding"></van-radio></van-col><van-col span="22">A、{{tm_A}}</van-col></van-row><br>-->
                  <!--<van-row><van-col span="2"><van-radio name="B" class="radio_check_padding"></van-radio></van-col><van-col span="22">B、{{tm_B}}</van-col></van-row><br>-->
                  <!--<van-row><van-col span="2"><van-radio name="C" class="radio_check_padding"></van-radio></van-col><van-col span="22">C、{{tm_C}}</van-col></van-row><br>-->
                  <!--<van-row><van-col span="2"><van-radio name="D" class="radio_check_padding"></van-radio></van-col><van-col span="22">D、{{tm_D}}</van-col></van-row><br>-->
                <!--</van-radio-group>-->

              <!--</div>-->

              <div v-if="$store.getters.list[$store.getters.status.current].txing ==='panduan'" >
                <van-radio-group v-model="selected" ><!--@change="checkDa()"-->
                  <van-radio name="A" class="radio_check_padding radio_check_heigth" v-bind:disabled="$store.getters.list[$store.getters.status.current].checkDaBoolean" @click="checkDa()">A、正确</van-radio>
                  <van-radio name="B" class="radio_check_padding radio_check_heigth" v-bind:disabled="$store.getters.list[$store.getters.status.current].checkDaBoolean" @click="checkDa()">B、错误</van-radio>
                </van-radio-group>
              </div>

            </van-col>
          </van-row>

          <div style="height: 10px;"></div>

          <div v-if="$store.getters.list[$store.getters.status.current].checkDaBoolean">
            <van-row>
              <van-col>

                <div v-show="$store.getters.list[$store.getters.status.current].da_result">
                  <span class="span_right">回答正确！</span>
                </div>

                <div v-show="!$store.getters.list[$store.getters.status.current].da_result">
                  <span class="span_error">回答错误！</span>正确答案：{{$store.getters.list[$store.getters.status.current].da}}
                </div>

              </van-col>
            </van-row>

            <!--<van-row>-->
              <!--<van-col>-->
                <!--<p class="p_well">【解析】{{txi}}</p>-->
              <!--</van-col>-->
            <!--</van-row>-->
          </div>

          <!--<div style="height: 10px;"></div>-->
          <!--<van-row>-->
          <!--<van-col offset="8" span="8" align="center"><van-button  @click="last()" size="small" type="danger">上一题</van-button></van-col>-->
          <!--<van-col offset="8" span="8" align="center"><van-button  @click="next()" size="small" type="danger">下一题</van-button></van-col>-->
          <!--</van-row>-->

        </div>


        <div v-if="showPercent" >

          <van-row><van-col>答对：{{$store.getters.status.totalRightCount}}</van-col></van-row>
          <van-row><van-col><div v-if="$store.getters.status.totalRightCount>=6">真棒！继续努力！</div></van-col></van-row>
          <van-row><van-col><van-button style="width: 160px;" type="primary" @click="toQuestionResult()">做题报告！</van-button></van-col></van-row>


        </div>


      </van-col>

    </van-row>



  </div>


</template>


<script>

  import axios from "axios";
  import Common from "../js/common";
  import Log from "../js/log";
  import Cookie from "../js/cookie";
  import store from '../store/index';

  import { mapGetters, mapActions } from 'vuex'


  var timerDownFlagDa;
  var timerDownDaTime = 3;
  var timerDownFlag;



  var tm_app;
  // var tms = {
  //   list: [
  //     {
  //     "A": "古代会计",
  //     "B": "近代会计",
  //     "C": "现代会计",
  //     "D": "当代会计",
  //     "da": ["A","B","C"],
  //     "id": "0b01ecd157c270010157c271d6e2000f",
  //     "txing": "duoxuan",
  //     "name": "会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不",
  //     "selected": [],
  //     "tg": "会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为（    ）阶段。",
  //     "txi": "题目解析: 会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为古代会计、近代会计和现代会计三个阶段。",
  //     "isReaded": false,
  //     "isCollection": 0
  //      }
  //   ]
  // }



  export default {
    name: 'Question',
    data(){
      return {
        time: 20,
        current:this.$store.getters.status.current,
        // total:2,
        total:this.$store.getters.list.length,

        disabled:false,
        // checkDaBoolean:false,
        nextBoolean:false,
        danxuanCheck:false,

        showTm:true,
        showPercent:false
      }
    }
    ,
    computed:{
      selected: {
        get () {
          // Log.i("get:this.$store.getters.list[this.current].selected:"+this.$store.getters.list[this.current].selected);
          var ret ;
          // if(!typeof(this.$store.getters.list[this.current].selected)=="undefined"){
            ret = this.$store.getters.list[this.$store.getters.status.current].selected;
          // }else{
          //   ret = '';
          // }
          return ret;

        },
        set (value) {
          this.$store.dispatch('setListQuestionSelected', value)
        }
      }
    }
    ,
    beforeRouteLeave(to, from, next) {
      // 设置下一个路由的 meta
      to.meta.keepAlive = true; // // 让 Course缓存
      next();
    },
    store,
    created() {
      tm_app = this;
      this.getQuestions();
    },

    methods: {
      onClickLeft() {
        //返回上一个页面
        //this.$router.go(-1);
        this.$router.push("/course"); //返回登录页面
      },

      toQuestionResult(){
        this.$router.push("/questionResult");
      },

      getQuestions: function () {

        if(this.$store.getters.list.length < 2){
          Log.i("重新获取数据！");
          axios({
            method: Common.method_post,
            url: Common.baseUrl + '/course/catalog/content/questions',
            contentType: Common.contentType,
            dataType: Common.dataType,
            headers: Common.generAuthHeader(Cookie.getCookie(Common.cookie_key)),
            data: {
              lang: Common.lang,
              agent: Common.agent,
              intfVer: Common.intfVer,
              payload: {
                params: {
                  productId: Common.productId,
                  contentId:this.$route.query.contentId
                }
              }
            },
          })
          .then(function (response) {
            if(response.data.ok == true) {
              tm_app.$store.commit('setList',response.data.data.list);
              tm_app.initJifen();
            }

          })
          .catch(function (response) {
            Log.e("Question:"+response);
          });
        }else{
          tm_app.initJifen();
        }



      },


      checkDa: function () {

        tm_app.danxuanCheck = false;
        tm_app.checkDaBoolean = true;
        tm_app.nextBoolen = false;

        //更新缓存的selected
        //this.$store.dispatch('setListQuestionSelected',tm_app.current,tm_app.selected);
        // tm_app.da_result = checkValue(tm_app.$store.getters.list[tm_app.current].selected, tm_app.$store.getters.list[tm_app.current].da)

        //先暂停倒计时
        clearInterval(timerDownFlag);
        //同时开启看答案倒计时
        tm_app.timerDownDa();

      },

      timerDownDa: function () {

        timerDownDaTime = 2;
        if (timerDownFlagDa) {
          clearInterval(timerDownFlagDa);
        }

        timerDownFlagDa = setInterval(function () {
          timerDownDaTime--;

          if (timerDownDaTime <= 0) {
            clearInterval(timerDownFlagDa);
            tm_app.next();
          }

        }, 1000)

      },

      last: function () {
        tm_app.$store.commit('decCurrent');
      },

      next: function () {

        clearInterval(timerDownFlag);
        clearInterval(timerDownFlagDa)

        if (this.$store.getters.status.current + 1 >= tm_app.total) {
          tm_app.showPercent = true;
          tm_app.showTm = false;
          return;
        }
        // tm_app.current++;
        tm_app.$store.commit('increaseCurrent');
        tm_app.initJifen();
      }

      ,

      timerDown: function () {
        if (timerDownFlag) {
          clearInterval(timerDownFlag);
          this.time = 20;
        }

        timerDownFlag = setInterval(function () {

          tm_app.time--;

          if (tm_app.time <= 0) {
            clearInterval(timerDownFlag);
            tm_app.checkDa();
            // tm_app.next();
          }

        }, 1000)
      },

      initJifen: function () {

        this.disabled = false;
        this.checkDaBoolean = false;

        this.nextBoolean = false;
        this.danxuanCheck = false;

        this.timerDown();
      }

    }


  }




  function checkValue (src_obj, target_obj) {
    var src_obj_array = new Array();
    var target_obj_array = new Array();
    //如果是String转换成数组。
    if (!Array.isArray(src_obj)) {
      src_obj_array.push(src_obj);
    } else {
      src_obj_array = src_obj;
    }

    if (!Array.isArray(target_obj)) {
      target_obj_array.push(target_obj);
    } else {
      target_obj_array = target_obj;
    }

    return src_obj_array.sort().toString() === target_obj_array.sort().toString();

  }




</script>

<style scoped>
  .p_error{
    background-color: red;border-radius:2px;padding: 4px;font-size: 14px;
  }

  .p_right{
    background-color: green;border-radius:2px;padding: 4px;font-size: 14px;
  }

  .p_well{
    background-color: burlywood;border-radius:2px;padding: 4px;font-size: 14px;
  }
  .span_right{
    color: green;border-radius:2px;padding: 4px;font-size: 14px;
  }

  .span_error{
    color: red;border-radius:2px;padding: 4px;font-size: 14px;
  }

  .radio_check_padding{
    padding-top: 8px;
  }

  .radio_check_heigth{
    height:  35px;
  }

</style>
