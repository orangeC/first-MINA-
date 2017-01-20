var app = getApp();
Page({
  data: {
    motto: 'Hello you1',
    userid: 123,
    switch:true,
    handleTap:234
  },
  //事件处理函数
  tapName:function(){
    this.setData({
      switch:! this.data.switch
    })
  }
})
