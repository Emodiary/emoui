// pages/writes/writes.js
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
Page({
  data: {
    info:0,
    _year: year,
    _month: month,
    day: day,
  },

  textinput:function(e){
    var content = e.detail.value;
    var cnt = parseInt(content.length);
    this.setData({
      neirong:content,
      info:cnt
    })
  },
})