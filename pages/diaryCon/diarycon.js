const date = new Date()
const years = []
const months = []
const days = []
var app = getApp()
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    idkey:-1,
    scrollTop:0,
      "content":"你好呀哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或爱我中华爱我中华爱我中华",
       value: [days[date.getDate()-1],months[date.getMonth()], date.getFullYear()]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  deleteDia:function(){
    var that=this;
    // wx.request({
    //   url: 'https://luckym.top/diary/deleteDiary/',
    //   method: 'post',
    //   header:{
    //     'content-type': 'application/json' // 默认值
    //   },
    //   data: {
    //     diary_id:that.data.idkey,
    //   },
    //   success:function(res){
    //     // that.data.content=res.data.content;
    //     console.log(res.data)
    //   },
    //   fail:function(res){
    //     console.log("失败")
    //   }
    // })
    app.globalData.deleteDiary=true;
    wx.navigateBack({
      delta: 1,
    })
  },
  onLoad: function (options) {
    
    var idkey=options.idkey;
    
    this.setData({
      idkey:idkey
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (event) {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})