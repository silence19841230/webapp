<!-- 课程列表，课程详情-->
<template>
  <div>
      <van-nav-bar title="财务课程" left-text="" left-arrow @click-left="onClickLeft"/>

      <van-row>

        <van-col offset="1" span="22" >

          <van-tabs @click="selectCourse">
                 <!--&lt;!&ndash; 最近学习的课程列表 &ndash;&gt;-->
                 <!--<van-list style="background: white">-->
                     <!--<div style="text-align: left" v-for="item in listRecently" :key="item"> {{ item }} </div>-->
                 <!--</van-list>-->
            <van-tab v-for="item in courses" :title="item.courseName" :key="item.id">
              <!--<div class="courseStyle">{{ item.courseName }}</div>-->
            </van-tab>

              <!-- 添加课程详情页面 -->
              <van-collapse v-model="activeNames">

                <!-- 章节 -->
                <div @click="selectChapter(item)" v-for="item in chapters" :key="item.id" >
                    <van-collapse-item :title="item.catalogName" :name="item.id">

                      <!-- 知识点 -->
                      <div @click="selectContents(item)" v-for="item in contents" :key="item.id" >
                      <van-cell :title="item.contentName"/>
                      </div>

                   </van-collapse-item>
               </div>

              </van-collapse>


          </van-tabs>

        </van-col>
      </van-row>

  </div>
</template>

<script>
import axios from "axios";
import Log from "../js/log";
import Common from "../js/common";
import Cookie from "../js/cookie";
import store from '../store/index'


export default {
  data() {
    return {
      //最近学习课程列表
      listRecently: ["近期学习..."],
      courses: [], //课程列表
      chapters: [], //章节列表
      contents: [], //知识点列表
      flag: false, //为true的时候，解析完课程后，解析课程章节
      loadContents: true, //是否加载知识点
      activeNames: ["1"] //
    };
  },
  store,
  created() {
    // this.$store.state.questionstroe.list[0]["A"]="444444";
    // Log.i(this.$store.state.questionstroe.list[0]["A"]);
    this.getCourse();
  },


  beforeUpdate() {
    if (this.flag) {
      this.flag = false;
      this.selectCourse(0);
    }
  },
  methods: {
    onClickLeft() {
      //返回上一个页面
      //this.$router.go(-1);
      this.$router.push("/"); //返回登录页面
    },
    //获取课程列表
    getCourse() {

      var self = this;
      axios({
        method: Common.method_post,
        url: Common.baseUrl + '/courses',
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
              courseType: Common.courseType
            }
          }
        }
      })
        .then(function(response) {
          // Log.i(response.data);
          if (response.data.ok == true) {
            self.courses = response.data.data.list;
            self.flag = true;
          }
        })
        .catch(function(error) {
          Log.i("error:" + error);
        });
    },
    //点击某一个课程，直接请求课程详情-获取章节列表
    selectCourse(index) {
      var self = this;
      var courseId = this.courses[index].id; //当前课程id
      axios({
        method: Common.method_post,
        url: Common.baseUrl + '/course/catalogs',
        contentType: Common.contentType,
        dataType: Common.dataType,
        headers:  Common.generAuthHeader(Cookie.getCookie(Common.cookie_key)),
        data: {
          lang: Common.lang,
          agent: Common.agent,
          intfVer: Common.intfVer,
          payload: {
            params: {
              courseid: courseId
            }
          }
        }
      })
        .then(function(response) {
          // Log.i(response.data);
          if (response.data.ok == true) {
            self.chapters = response.data.data.list;
          }
        })
        .catch(function(error) {
          Log.i("error:" + error);
        });
    },
    //点击某一个章节，直接请求章节详情-知识点
    selectChapter(item) {
      if (!this.loadContents) {
        //是否执行下面代码，请求知识点api
        return;
      }
      Log.i("执行点击章节代码");
      var self = this;
      var courseId = item.courseid;
      var catalogId = item.id;
      axios({
        method: Common.method_post,
        url: Common.baseUrl + '/course/catalog/contents',
        contentType: Common.contentType,
        dataType: Common.dataType,
        headers: Common.generAuthHeader(Cookie.getCookie(Common.cookie_key)),
        data: {
          lang: Common.lang,
          agent: Common.agent,
          intfVer: Common.intfVer,
          payload: {
            params: {
              courseid: courseId,
              catalogid: catalogId
            }
          }
        }
      })
        .then(function(response) {
          // Log.i(response.data);
          if (response.data.ok == true) {
            self.contents = response.data.data.list;
          }
        })
        .catch(function(error) {
          Log.i("error:" + error);
        });
    },
    //点击某一个知识点
    selectContents(item) {
      var self = this;
      this.loadContents = false;
      var courseid = item.courseid;
      var catalogid = item.sectionid;
      var contentid = item.id;
      setTimeout(function() {
        //延时加载
        self.loadContents = true;
        self.$router.push({ name: 'question', query: { contentId:contentid }});
      }, 100);
      Log.i("执行点击知识点代码");
    } ////////////
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.courseStyle {
  background: white;
  color: #ea6b6c;
  font-size: 15px;
  text-align: left;
}
.van-nav-bar__title {
  color: gray;
  font-weight: bold;
}
.van-nav-bar .van-icon {
  color: gray;
  vertical-align: middle;
}
.van-ellipsis {
  overflow: visible;
}
</style>
