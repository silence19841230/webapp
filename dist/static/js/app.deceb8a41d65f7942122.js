webpackJsonp([1],{B3Rd:function(t,e){},CMvz:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("/ocq"),o=n("mtWM"),s=n.n(o),i="token",c=7200,l="http://www.popacct.cc/popacct/rest/tm",u="2c9315a9626ffa2e01628114fc720003",d="tklx",v="1.0.0",f="zh-CN",h="web",p="json",_="post",m="application/json; charset=utf-8",g=function(t){return{"X-AUTH-TOKEN":t}},w=function(t,e,n){var a=new Date;a.setSeconds(a.getSeconds()+n),document.cookie=t+"="+escape(e)+"; expires="+a.toGMTString()},k=function(t){if(document.cookie.length>0){var e=document.cookie.indexOf(t+"=");if(-1!=e){e=e+t.length+1;var n=document.cookie.indexOf(";",e);return-1==n&&(n=document.cookie.length),unescape(document.cookie.substring(e,n))}}return""},y={name:"Login",data:function(){return{username:"admin",password:"adminkeyun",loading:!1}},beforeRouteLeave:function(t,e,n){t.meta.keepAlive=!1,n()},methods:{login:function(){var t=this;this.loading=!1,s()({method:_,url:l+"/token",contentType:m,dataType:p,data:{lang:f,agent:h,intfVer:v,payload:{params:{username:this.username,password:this.password}}}}).then(function(e){t.loading=!0,e.data.ok&&(w(i,e.data.data.token,c),t.$router.push("/course"))}).catch(function(t){console.log(t)})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"登录"}}),t._v(" "),n("van-row",[n("van-col",{staticStyle:{height:"100px"}})],1),t._v(" "),n("van-row",[n("van-col",{attrs:{offset:"1",span:"22"}},[n("van-field",{attrs:{label:"用户名",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(e){t.username=""}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:"密码",icon:"clear",placeholder:"请输入密码",required:""},on:{"click-icon":function(e){t.password=""}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("van-row",[n("van-col",{staticStyle:{height:"20px"}})],1),t._v(" "),n("van-row",[n("van-col",{attrs:{offset:"2",span:"20",align:"center"}},[n("van-button",{staticStyle:{width:"160px"},attrs:{type:"primary"},on:{click:function(e){t.login()}}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};var C=n("VU/8")(y,x,!1,function(t){n("B3Rd")},"data-v-5f7e23ae",null).exports,b=n("mvHQ"),A=n.n(b),$=function(t){console.log("[info]请求结果:"+A()(t))},S=function(t){console.log("[error]请求结果:"+A()(t))},R=n("9rMa"),D=n("fZjL"),B=n.n(D),L=n("OvRC"),T=n.n(L),q=window.localStorage,I=function(t){try{return JSON.parse(q.getItem(t))}catch(t){return null}},N=function(t,e){q.setItem(t,A()(e))};n("c/Tr"),n("//Fk");I("vbox");var Q={state:{list:[{A:"古代会计",B:"近代会计",C:"现代会计",D:"当代会计",da:["A","B","C"],id:"0b01ecd157c270010157c271d6e2000f",txing:"duoxuan",name:"会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不",selected:[],tg:"会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为（    ）阶段。",txi:"题目解析: 会计是随着人类社会生产的发展和经济管理的需要而产生、发展并不断得到完善。其中，会计的发展可划分为古代会计、近代会计和现代会计三个阶段。",isReaded:!1,isCollection:0}],status:{}},getters:{list:function(t){return t.list},txing_cn:function(t){return function(e){var n=t.list[e].txing;return"danxuan"===n?"单选题":"duoxuan"===n?"多选题":"panduan"===n?"判断题":"未知题"}},da_result:function(t){return function(e){var n=t.list[e].selected,a=t.list[e].da,r=new Array,o=new Array;return Array.isArray(n)?r=n:r.push(n),Array.isArray(a)?o=a:o.push(a),r.sort().toString()===o.sort().toString()}},status:function(t){return t.status}},plugins:[function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=t||"lsKey";return function(t){t.subscribe(function(t,r){if(n.findIndex(function(e){return e===t.type})<0){var o=T()(null);B()(r).forEach(function(t){e[t]&&(o[t]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t)return t;var n=T()(null);return e.forEach(function(e){n[e]=t[e]}),n}(r[t],e[t]))}),N(a,o)}})}}("vbox",{questionstore:["list","setList"]},[])],actions:{setList:function(t,e){(0,t.commit)("setList",e)},setCheckDaBoolean:function(t,e){(0,t.commit)("setCheckDaBoolean",e)},setListQuestionSelected:function(t,e,n){(0,t.commit)("setListQuestionSelected",e,n)}},mutations:{setList:function(t,e){t.list=e},setListQuestionSelected:function(t,e,n){t.list[e].selected=n;var a=n,r=t.list[e].da,o=new Array,s=new Array;Array.isArray(a)?o=a:o.push(a),Array.isArray(r)?s=r:s.push(r),t.list[e].da_result=o.sort().toString()===s.sort().toString()},setCheckDaBoolean:function(t,e){t.status.checkDaBoolean=e}}};a.default.use(R.a);var V,E,U,F=new R.a.Store({modules:{questionstroe:Q}}),M=3,j={name:"Question",data:function(){return{jifen:0,time:20,current:0,total:20,da_result:!1,disabled:!1,checkDaBoolean:!1,nextBoolean:!1,danxuanCheck:!1,showTm:!0,showPercent:!1,totalRightCount:0}},beforeRouteLeave:function(t,e,n){t.meta.keepAlive=!0,n()},mounted:function(){},store:F,created:function(){U=this,this.getQuestions()},methods:{onClickLeft:function(){this.$router.push("/course")},toQuestionResult:function(){this.$router.push("/questionResult")},getQuestions:function(){s()({method:_,url:l+"/course/catalog/content/questions",contentType:m,dataType:p,headers:g(k(i)),data:{lang:f,agent:h,intfVer:v,payload:{params:{productId:u,contentId:this.$route.query.contentId}}}}).then(function(t){1==t.data.ok&&($("response.data.data.list:"+t.data.data.list),U.$store.dispatch("setList",t.data.data.list),U.initJifen())}).catch(function(t){S("Question:"+t)})},checkDa:function(){U.danxuanCheck=!1,U.checkDaBoolean=!0,U.nextBoolen=!1,U.da_result=function(t,e){var n=new Array,a=new Array;Array.isArray(t)?n=t:n.push(t);Array.isArray(e)?a=e:a.push(e);return n.sort().toString()===a.sort().toString()}(U.$store.getters.list[U.current].selected,U.$store.getters.list[U.current].da),U.da_result&&(U.jifen+=10,U.totalRightCount++),clearInterval(E),U.timerDownDa()},timerDownDa:function(){M=2,V&&clearInterval(V),V=setInterval(function(){--M<=0&&(clearInterval(V),U.next())},1e3)},next:function(){if(clearInterval(E),clearInterval(V),U.current+1==U.total)return U.showPercent=!0,void(U.showTm=!1);U.current++,U.initJifen()},timerDown:function(){E&&(clearInterval(E),this.time=20),E=setInterval(function(){U.time--,U.time<=0&&(clearInterval(E),U.checkDa())},1e3)},initJifen:function(){this.da_result=!1,this.disabled=!1,this.checkDaBoolean=!1,this.nextBoolean=!1,this.danxuanCheck=!1,this.timerDown()}}};var O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"财务课程","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticStyle:{height:"10px"}}),t._v(" "),n("van-row",[n("van-col",{attrs:{offset:"1",span:"22"}},[n("van-row",[n("van-col",{attrs:{span:"8",align:"left"}},[t._v("积分："+t._s(t.jifen))]),t._v(" "),n("van-col",{attrs:{span:"8",align:"center"}},[n("van-progress",{staticStyle:{width:"100%","margin-top":"8px"},attrs:{color:"#f09000","show-pivot":!1,percentage:5*t.time}})],1),t._v(" "),n("van-col",{attrs:{span:"8",align:"right"}},[t._v(t._s(t.current+1)+"/"+t._s(t.total))])],1),t._v(" "),n("div",{staticStyle:{height:"10px"}}),t._v(" "),t.showTm?n("div",[n("van-row",[n("van-col",{attrs:{span:"24",align:"left"}},[n("van-tag",{attrs:{type:"primary"}},[t._v("第"+t._s(t.current+1)+"题：")]),t._v("【"+t._s(t.$store.getters.txing_cn(t.current))+"】")],1),t._v(" "),n("van-col",{attrs:{span:"24",align:"left"}},[n("p",{staticClass:"p_well"},[t._v(t._s(t.$store.getters.list[t.current].tg))])])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"24",align:"left"}},["panduan"===t.$store.getters.list[t.current].txing?n("div",[n("van-radio-group",{model:{value:t.$store.getters.list[t.current].selected,callback:function(e){t.$set(t.$store.getters.list[t.current],"selected",e)},expression:"$store.getters.list[current].selected"}},[n("van-radio",{staticClass:"radio_check_padding radio_check_heigth",attrs:{name:"A",disabled:t.checkDaBoolean},on:{click:function(e){t.checkDa()}}},[t._v("A、正确")]),t._v(" "),n("van-radio",{staticClass:"radio_check_padding radio_check_heigth",attrs:{name:"B",disabled:t.checkDaBoolean},on:{click:function(e){t.checkDa()}}},[t._v("B、错误")])],1)],1):t._e()])],1),t._v(" "),n("div",{staticStyle:{height:"10px"}}),t._v(" "),t.checkDaBoolean?n("div",[n("van-row",[n("van-col",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.da_result,expression:"da_result"}]},[n("span",{staticClass:"span_right"},[t._v("回答正确！")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.da_result,expression:"!da_result"}]},[n("span",{staticClass:"span_error"},[t._v("回答错误！")]),t._v("正确答案："+t._s(t.$store.getters.list[t.current].da)+"\n              ")])])],1)],1):t._e()],1):t._e(),t._v(" "),t.showPercent?n("div",[n("van-row",[n("van-col",[t._v("答对："+t._s(t.totalRightCount))])],1),t._v(" "),n("van-row",[n("van-col",[t.totalRightCount>=6?n("div",[t._v("真棒！继续努力！")]):t._e()])],1),t._v(" "),n("van-row",[n("van-col",[n("van-button",{staticStyle:{width:"160px"},attrs:{type:"primary"},on:{click:function(e){t.toQuestionResult()}}},[t._v("做题报告！")])],1)],1)],1):t._e()],1)],1)],1)},staticRenderFns:[]};var J=n("VU/8")(j,O,!1,function(t){n("lwIG")},"data-v-bb49ccea",null).exports,P={data:function(){return{listRecently:["近期学习..."],courses:[],chapters:[],contents:[],flag:!1,loadContents:!0,activeNames:["1"]}},store:F,created:function(){this.getCourse()},beforeUpdate:function(){this.flag&&(this.flag=!1,this.selectCourse(0))},methods:{onClickLeft:function(){this.$router.push("/")},getCourse:function(){var t=this;s()({method:_,url:l+"/courses",contentType:m,dataType:p,headers:g(k(i)),data:{lang:f,agent:h,intfVer:v,payload:{params:{productId:u,courseType:d}}}}).then(function(e){1==e.data.ok&&(t.courses=e.data.data.list,t.flag=!0)}).catch(function(t){$("error:"+t)})},selectCourse:function(t){var e=this,n=this.courses[t].id;s()({method:_,url:l+"/course/catalogs",contentType:m,dataType:p,headers:g(k(i)),data:{lang:f,agent:h,intfVer:v,payload:{params:{courseid:n}}}}).then(function(t){1==t.data.ok&&(e.chapters=t.data.data.list)}).catch(function(t){$("error:"+t)})},selectChapter:function(t){if(this.loadContents){$("执行点击章节代码");var e=this,n=t.courseid,a=t.id;s()({method:_,url:l+"/course/catalog/contents",contentType:m,dataType:p,headers:g(k(i)),data:{lang:f,agent:h,intfVer:v,payload:{params:{courseid:n,catalogid:a}}}}).then(function(t){1==t.data.ok&&(e.contents=t.data.data.list)}).catch(function(t){$("error:"+t)})}},selectContents:function(t){var e=this;this.loadContents=!1;t.courseid,t.sectionid;var n=t.id;setTimeout(function(){e.loadContents=!0,e.$router.push({name:"question",query:{contentId:n}})},100),$("执行点击知识点代码")}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"财务课程","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-row",[n("van-col",{attrs:{offset:"1",span:"22"}},[n("van-tabs",{on:{click:t.selectCourse}},[t._l(t.courses,function(t){return n("van-tab",{key:t.id,attrs:{title:t.courseName}})}),t._v(" "),n("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.chapters,function(e){return n("div",{key:e.id,on:{click:function(n){t.selectChapter(e)}}},[n("van-collapse-item",{attrs:{title:e.catalogName,name:e.id}},t._l(t.contents,function(e){return n("div",{key:e.id,on:{click:function(n){t.selectContents(e)}}},[n("van-cell",{attrs:{title:e.contentName}})],1)}))],1)}))],2)],1)],1)],1)},staticRenderFns:[]};var z=n("VU/8")(P,H,!1,function(t){n("f5Q/")},null,null).exports,G={name:"QuestionResult",data:function(){return{}},beforeRouteLeave:function(t,e,n){n()},mounted:function(){},store:F,created:function(){},methods:{onClickLeft:function(){this.$router.push("/question")}}};var K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"财务课程","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticStyle:{height:"10px"}}),t._v(" "),n("van-row",[n("van-col",{attrs:{offset:"1",span:"22"}},t._l(t.$store.getters.list,function(e,a){return n("div",[n("hr"),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"24",align:"left"}},[n("van-tag",{attrs:{type:"primary"}},[t._v("第"+t._s(a+1)+"题：")]),t._v("【"+t._s(t.$store.getters.txing_cn(a))+"】")],1),t._v(" "),n("van-col",{attrs:{span:"24",align:"left"}},[n("p",{staticClass:"p_well"},[t._v(t._s(e.tg))])])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"24",align:"left"}},["panduan"===e.txing?n("div",[n("van-radio-group",{attrs:{disabled:""},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"tm.selected"}},[n("van-radio",{staticClass:"radio_check_padding radio_check_heigth",attrs:{name:"A"}},[t._v("A、正确")]),t._v(" "),n("van-radio",{staticClass:"radio_check_padding radio_check_heigth",attrs:{name:"B"}},[t._v("B、错误")])],1)],1):t._e()])],1),t._v(" "),n("div",{staticStyle:{height:"10px"}}),t._v(" "),n("van-row",[n("van-col",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.da_result,expression:"tm.da_result"}]},[n("span",{staticClass:"span_right"},[t._v("回答正确！")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.da_result,expression:"!tm.da_result"}]},[n("span",{staticClass:"span_error"},[t._v("回答错误！")]),t._v("正确答案："+t._s(e.da)+"\n              ")])])],1),t._v(" "),n("van-row",[n("van-col",[n("p",{staticClass:"p_well"},[t._v("【解析】"+t._s(e.txi))])])],1)],1)}))],1)],1)},staticRenderFns:[]};var W=n("VU/8")(G,K,!1,function(t){n("duFM")},"data-v-0ab63a8c",null).exports;a.default.use(r.a);var X=new r.a({routes:[{path:"/",name:"Login",component:C},{path:"/question",name:"question",component:J,meta:{requiresAuth:!0}},{path:"/course",name:"Course",component:z,meta:{requiresAuth:!0,keepAlive:!0}},{path:"/questionResult",name:"QuestionResult",component:W,meta:{requiresAuth:!0}}]}),Z=n("ymRw"),Y=n.n(Z),tt=(n("CMvz"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]});var et=n("VU/8")({name:"App"},tt,!1,function(t){n("Ucng")},null,null).exports;a.default.use(Y.a),a.default.config.productionTip=!1,X.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?k(i)?n():n({path:"/",query:{redirect:t.fullPath}}):n()}),new a.default({el:"#app",router:X,components:{App:et},template:"<App/>"})},Ucng:function(t,e){},duFM:function(t,e){},"f5Q/":function(t,e){},lwIG:function(t,e){}},["NHnr"]);