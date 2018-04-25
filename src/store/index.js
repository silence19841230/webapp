import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'
Vue.use(Vuex)


vuexAlong.watch(['list'],true);
vuexAlong.watch(['status'],true);

var TXING_DANXUAN = "danxuan";
var TXING_DUOXUAN = "duoxuan";
var TXING_PANDUAN = "panduan";

var TXING_DANXUAN_CN = "单选题";
var TXING_DUOXUAN_CN = "多选题";
var TXING_PANDUAN_CN = "判断题";
var TXING_NONE_CN = "未知题";

const store = new Vuex.Store({

  state : {
    list:  [
      {
        "A": "古代会计",
        "B": "近代会计",
        "C": "现代会计",
        "D": "当代会计",
        "da": ["A","B","C"],
        "id": "0b01ecd157c270010157c271d6e2000f",
        "txing": "duoxuan",
        "name": "会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不",
        "selected": [],
        "tg": "会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为（    ）阶段。",
        "txi": "题目解析: 会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为古代会计、近代会计和现代会计三个阶段。",
        "isReaded": false,
        "isCollection": 0,
        checkDaBoolean:false

      }
    ],

    status:{
      jifen:0,
      totalRightCount:0,
      current:0
    }
  },


  getters : {
    list: (state) => {
      return state.list;
    },
    status:(state)=>{
      return state.status;
    },
    total:(state)=>{
      return state.list.length;
    },
    txing_cn:(state)=>(index)=>{
      var txing = state.list[index].txing;

      if(txing === TXING_DANXUAN){
        return TXING_DANXUAN_CN;
      }

      if(txing === TXING_DUOXUAN){
        return TXING_DUOXUAN_CN;
      }

      if(txing === TXING_PANDUAN){
        return TXING_PANDUAN_CN;
      }

      return TXING_NONE_CN;

    },
    da_result:(state)=>(index)=>{


      var src_obj = state.list[index].selected;
      var target_obj = state.list[index].da;

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

  },



  mutations : {
    setList (state, list) {
      state.list = list;
    },

    setStatus (state, status) {
      state.status = status;
    },

    setListQuestionSelected (state, selected) {
      state.list[state.status.current].selected = selected;

      // console.log("get:setListQuestionSelected1:"+obj.value );

      var src_obj = selected;
      var target_obj = state.list[state.status.current].da;

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

      var result  =  src_obj_array.sort().toString() === target_obj_array.sort().toString();
      state.list[state.status.current].da_result  = result;
      state.list[state.status.current].checkDaBoolean = true;

      if(result == true){
        state.status.jifen +=10;
        state.status.totalRightCount +=1;
      }

    },
    increaseCurrent(state){
      state.status.current++;
      if(state.status.current >= state.list.length-1){
        state.status.current = state.list.length-1;
      }

    },
    decCurrent(state){
      state.status.current--;
      if(state.status.current <=0){
        state.status.current  = 0;
      }

    },
    setCheckDaBoolean(state,checkDaBoolean){
      state.list[state.status.current].checkDaBoolean = checkDaBoolean;
    }
  }
  ,

  actions : {

    setList ({ commit },list) {
      commit('setList',list)
    },
    setStatus ({ commit },status) {
      commit('setStatus',status)
    },
    setListQuestionSelected ({ commit }, obj) {
      commit('setListQuestionSelected',obj);
    },
    increaseCurrent ({ commit }) {
      commit('increaseCurrent');
    },
    decCurrent ({ commit }) {
      commit('increaseCurrent');
    },
    setCheckDaBoolean({ commit }, checkDaBoolean) {
      commit('setCheckDaBoolean',checkDaBoolean);
    }

  }
  ,

  plugins: [vuexAlong]


})


export default store
