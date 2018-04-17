<template>

  <div>
    <van-nav-bar title="财务课程" left-text="" left-arrow @click-left="onClickLeft"/>

    <div style="height: 10px;"></div>

    <van-row>

      <van-col offset="1" span="22">


          <div v-for="(tm, index)  in $store.getters.list">
            <hr>

            <van-row>
              <van-col span="24" align="left"><van-tag type="primary" >第{{index+1}}题：</van-tag>【{{$store.getters.txing_cn(index)}}】</van-col>
              <van-col span="24" align="left"><p class="p_well">{{tm.tg}}</p></van-col>
            </van-row>

            <van-row>
              <van-col span="24" align="left">

                <div v-if="tm.txing==='panduan'" >
                  <van-radio-group v-model="tm.selected" disabled>
                    <van-radio name="A" class="radio_check_padding radio_check_heigth" >A、正确</van-radio>
                    <van-radio name="B" class="radio_check_padding radio_check_heigth" >B、错误</van-radio>
                  </van-radio-group>
                </div>

              </van-col>
            </van-row>

            <div style="height: 10px;"></div>

            <van-row>
              <van-col>
                <div v-show="tm.da_result">
                  <span class="span_right">回答正确！</span>
                </div>

                <div v-show="!tm.da_result">
                  <span class="span_error">回答错误！</span>正确答案：{{tm.da}}
                </div>

              </van-col>
            </van-row>

            <van-row>
              <van-col>
                <p class="p_well">【解析】{{tm.txi}}</p>
              </van-col>
            </van-row>

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
  import store from '../store/index'





  export default {
    name: 'QuestionResult',
    data(){
      return {
      }
    }
    ,
    beforeRouteLeave(to, from, next) {
      next();
    }
    ,
    mounted(){

    },
    store,
    created() {
      // this.$store.state.questionstroe.list[0]["A"]="444444";
      // Log.i(this.$store.state.questionstroe.list[0]["A"]);

      // this.$store.dispatch('setList',tms.list);
    }
    ,
    methods: {
      onClickLeft() {
        this.$router.push("/question");
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
