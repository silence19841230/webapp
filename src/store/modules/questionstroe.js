// // import { proxy } from '../../utils/LSProxy'
// // import { createLSPlugin } from '../../plugin/syncls'
// // import ls from '../../utils/LStorage'
// //
// // const LS_KEY = 'vbox'
// //
// // const lsData = ls.getItem(LS_KEY)
// // let mapping = {
// //   questionstore: ['list', 'setList']
// // }
// // let mWhiteList = []
// //
// // const plugin = createLSPlugin(LS_KEY, mapping, mWhiteList)
// // import { vuexAlong } from '../../plugin/vuex-along'
//
//
//
// let state = {
//   list:  [
//     {
//       "A": "古代会计",
//       "B": "近代会计",
//       "C": "现代会计",
//       "D": "当代会计",
//       "da": ["A","B","C"],
//       "id": "0b01ecd157c270010157c271d6e2000f",
//       "txing": "duoxuan",
//       "name": "会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不",
//       "selected": [],
//       "tg": "会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为（    ）阶段。",
//       "txi": "题目解析: 会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为古代会计、近代会计和现代会计三个阶段。",
//       "isReaded": false,
//       "isCollection": 0
//     }
//   ],
//
//   status:{
//   }
// }
//
//
// // state = proxy(state, 'list', ['list','status']);
//
// var TXING_DANXUAN = "danxuan";
// var TXING_DUOXUAN = "duoxuan";
// var TXING_PANDUAN = "panduan";
//
// var TXING_DANXUAN_CN = "单选题";
// var TXING_DUOXUAN_CN = "多选题";
// var TXING_PANDUAN_CN = "判断题";
// var TXING_NONE_CN = "未知题";
//
// // getters
// const getters = {
//   list: (state) => {
//
//     return state.list;
//   },
//   txing_cn:(state)=>(index)=>{
//     var txing = state.list[index]["txing"];
//
//     if(txing === TXING_DANXUAN){
//       return TXING_DANXUAN_CN;
//     }
//
//     if(txing === TXING_DUOXUAN){
//       return TXING_DUOXUAN_CN;
//     }
//
//     if(txing === TXING_PANDUAN){
//       return TXING_PANDUAN_CN;
//     }
//
//     return TXING_NONE_CN;
//
//   },
//   da_result:(state)=>(index)=>{
//
//
//     var src_obj = state.list[index].selected;
//     var target_obj = state.list[index].da;
//
//     var src_obj_array = new Array();
//     var target_obj_array = new Array();
//     //如果是String转换成数组。
//     if (!Array.isArray(src_obj)) {
//       src_obj_array.push(src_obj);
//     } else {
//       src_obj_array = src_obj;
//     }
//
//     if (!Array.isArray(target_obj)) {
//       target_obj_array.push(target_obj);
//     } else {
//       target_obj_array = target_obj;
//     }
//
//     return src_obj_array.sort().toString() === target_obj_array.sort().toString();
//   }
//   ,
//   status:(state)=>{
//     return state.status;
//   }
//
// }
//
// // mutations
// const mutations = {
//   setList (state, list) {
//     state.list = list;
//   },
//
//   setListQuestionSelected (state, current,selected) {
//     state.list[current]["selected"] = selected;
//
//     var src_obj = selected;
//     var target_obj = state.list[current].da;
//
//     var src_obj_array = new Array();
//     var target_obj_array = new Array();
//     //如果是String转换成数组。
//     if (!Array.isArray(src_obj)) {
//       src_obj_array.push(src_obj);
//     } else {
//       src_obj_array = src_obj;
//     }
//
//     if (!Array.isArray(target_obj)) {
//       target_obj_array.push(target_obj);
//     } else {
//       target_obj_array = target_obj;
//     }
//
//     state.list[current]["da_result"] =  src_obj_array.sort().toString() === target_obj_array.sort().toString();
//
//   },
//   setCheckDaBoolean(state,checkDaBoolean){
//     state.status["checkDaBoolean"] = checkDaBoolean;
//   }
//   // ,
//   // incrementIndex(){
//   //   state.index++;
//   //   if(state.index>=state.list.length-1){
//   //     state.index=state.list.length-1;
//   //   }
//   // },
//   // reduceIndex(){
//   //   state.index--;
//   //   if(state.index<=0){
//   //     state.index = 0;
//   //   }
//   // }
// }
//
// const actions = {
//
//   setList ({ commit },list) {
//     commit('setList',list)
//   },
//   setCheckDaBoolean({ commit },checkDaBoolean){
//     commit('setCheckDaBoolean',checkDaBoolean);
//   },
//   setListQuestionSelected ({ commit }, current,selected) {
//     commit('setListQuestionSelected',current,selected);
//   },
//   // ,
//   // incrementIndex({ commit }){
//   //   commit('incrementIndex');
//   // },
//   // reduceIndex({ commit }){
//   //   commit('reduceIndex');
//   // }
//
// }
//
//
// export default {
//   state,
//   getters,
//   plugins: [vuexAlong],
//   actions,
//   mutations
// }
