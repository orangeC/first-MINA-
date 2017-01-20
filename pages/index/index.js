//index.js
//获取应用实例
var app = getApp();
var common = require("../../utils/common.js")
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function(){
    app.globalData.userInfo = "i am in index.js";
    console.log(app.globalData.userInfo)
  },
  onHide: function(){
    common.sayHello("看这");
    common.sayGoodbye("再见")
  }
})
