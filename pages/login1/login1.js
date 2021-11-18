// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Emo 日记',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../diary/diary'
    })
  },
  fStroll:function(){
    wx.reLaunch({
      url: '../diary/diary'
    })
    // app.globalData.getsettingflag=true;
    // console.log(app.globalData);
    
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      })
    }
  },
    // 获取code、userInfo等信息
    getUserProfile () {
      var p1 = new Promise((resolve, reject) => {
        wx.login({
          success: res => {
            // 这里也可以选择性返回需要的字段
            resolve(res)
          }
        })
      })
      var p2 = new Promise((resolve, reject) => {
        wx.getUserProfile({
          desc: '用于完善会员资料',
          success: res => {
            // 这里也可以选择性返回需要的字段
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            }),
              wx.reLaunch({
              url: '../diary/diary'
            }),
            resolve(res)
          }
        })
      })
      // 同时执行p1和p2，并在它们都完成后执行then
      Promise.all([p1, p2]).then((results) => {
        // results是一个长度为2的数组，放置着p1、p2的resolve
        this.handleUserInfo({
            // 这里也可以选择性返回需要的字段
            ...results[0],
            ...results[1]
        })
      })
    },
    // 组织好后端需要的字段，并调用接口
    handleUserInfo (data) {
      const { code, encryptedData, userInfo, iv, rawData, signature, cloudID } = data
      const params = {
        userInfo,
        // ....
      }
      // wx.request({
      //   url: 'https://viencoding.com/api/v1/wx/login',
      //   method: 'post',
      //   data: {
      //     code: res.code,
      //     encrypted_data:  res.encryptedData,
      //     iv: res.iv
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success (res) {
      //     console.log(res.data)
      //   }
      // })
      // 调用接口维护本地登录态
    },
  
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       }),
  //       wx.reLaunch({
  //         url: '../diary/diary'
  //       })
        
  //     }
  //   })
  // },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
