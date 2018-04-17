
export default {
  cookie_key:"token",
  cookie_seconds:2*60*60,

  //developmode
  baseUrl : "http://www.popacct.cc/popacct/rest/tm",
  productId:"2c9315a9626ffa2e01628114fc720003",//CPAV1
  //debugmode
  // baseUrl : "http://localhost:8080/rest/tm",
  // productId:"402881f06073490501607349c1710001",//财务管理

  courseType:"tklx",
  intfVer:"1.0.0",
  service: "",
  lang: 'zh-CN',
  agent: 'web',
  dataType:'json',
  method_post:"post",
  method_get:"get",
  contentType:"application/json; charset=utf-8",

  generAuthHeader:function(token){
    return {"X-AUTH-TOKEN":token};
  }
}
