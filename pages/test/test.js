var app = getApp();
Page({
  data: {
    motto: 'Hello you1',
    userid: 123,
    switch:true,
    handleTap:234,
    arr:[
      {message:"微信"},
      {message:"小"},
      {message:"程"},
      {message:"序"}
      
    ]
  },
  //事件处理函数
  tapName:function(){
    this.setData({
      switch:! this.data.switch
    })
  }
})
