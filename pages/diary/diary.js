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
  data: {
    idkey:-1,
    tags:'治愈',
    flag1:true,
    years,
    year: date.getFullYear(),
    months,
    month: 11,
    days,
    day: 12,
    value: [date.getMonth(), date.getFullYear()],
    isDaytime: true,
    pageNum: 1,
    array:[{
        'content':'???????????????????????????护手霜上海市???????ds打啥湿哒哒所fafgadfagdfaa???????????????????????????????',
    }
     
    ]
  },
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[1]],
      month: this.data.months[val[0]],
    })
  },
  diaryContent:function(event){
    var idkey=event.currentTarget.dataset.id;
    this.setData({
      idkey:idkey
    })
    wx.navigateTo({
      url: '../diaryCon/diarycon?idkey='+idkey,
    })
  },
  editDairy:function(){
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权
          wx.navigateTo({
            url: '../write/write',
          })
        }else{
     
          wx.navigateTo({
            url: '../login2/login2',
          })
        }
      }
    })
    
  },

//触底响应函数，监听下拉加载----------------------------------->>>>>>>>>
onBottom(){
  (this.data.pageNum)++;
  this.getNoticeList();
},
getListSuccess(res){
  //成功回调函数，具体需要根据业务需求设计分支结构，此处省略
  if (this.data.pageNum == 1) {
    this.setData({
      array: res.data.data.list,
     })
  } else {
    //获取原始列表
      let noticeList = that.data.array;
      //获取新列表
      let arr = res.data.list;
      //新列表数据与原列表数据合并
      let newArr = noticeList.concat(arr);
      this.setData({
          noticeList: newArr,
      })
  }
},
//获取列表失败的回调函数
getListFail(err){
  wx.showToast({
    title: '获取失败，请稍后重试',
    icon:'none',
    duration:2500,
  })
},
getNoticeList(){
  //请求的接口地址
  let url = '/diary/getAll';
  //当前的页码
  let pageNo = this.data.pageNum;
  //某些业务数据，如
  let id = this.data.id;
  //一页包含几条数据
  let pageSize = 10;
  let data = {
    id: id,
    pageNo: pageNo,
    pageSize: pageSize,
  }
  //this.getListSuccess和this.getListFail分别是成功和失败的回调函数
  // $.ajax(url, 'POST', data, this.getListSuccess, this.getListFail);
},
/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function () {
  this.onBottom();
},
//触底响应函数，监听下拉加载-----------------------------------^^^^^^^^^^>>>>>>>

  onLoad: function () {
      // wx.request({
      //   url: 'https://luckym.top/diary/getAll',
      //   method: 'get',
      //   data: {
      //     page: this.data.pageNum,
      //     page_count:  res.encryptedData,
      //     iv: res.iv
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success (res) {
      //     console.log(res.data)
      //   }
      // })
   
  },
  // showPopup() {
  //   this.popup.showPopup();
    
  // },
  onShow:function(event){
    var that=this;
    if(app.globalData.deleteDiary){
      app.globalData.deleteDiary=false;
      that.data.array.splice(this.data.idkey,1);
      that.setData({
        array:that.data.array,
      })
    }
    if( app.globalData.diasucc){
      this.setData({
        tags:wx.getStorageSync("tags"),
     day:wx.getStorageSync("w_day"),
     month:wx.getStorageSync("w_month"),
     year:wx.getStorageSync("w_year"),
     "array[0].content":wx.getStorageSync("w_content"),
   });
 }
    this.eat = this.selectComponent("#eat"); //组件的id
    if( app.globalData.diasucc)
    {
      this.eat.showEat();
      setTimeout(function(){
        this.eat.hideEat();
      }.bind(this),3000)
    }

  },
  
//    getdatalist: function () { //可在onLoad中设置为进入页面默认加载
//    var that = this;
//     wx.request({
//       url: '请求地址',
//       data: {
//         "key": "某入参value",
//         "pageNum": that.data.pagenum, //从数据里获取当前页数
//         "pageSize": 10, //每页显示条数
//       },
//       method: "POST",
//       success: function (res) {
//         var arr1 = that.data.datalist; //从data获取当前datalist数组
//         var arr2 = res.data; //从此次请求返回的数据中获取新数组
//         arr1 = arr1.concat(arr2); //合并数组
//         that.setData({
//           datalist: arr1 //合并后更新datalist
//         })
//       },
//       fail: function (err) { },//请求失败
//       complete: function () { }//请求完成后执行的函数
//     })
//   }
})
