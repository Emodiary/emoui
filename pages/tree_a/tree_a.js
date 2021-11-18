Page({
  data:{
    id:1,
      name:"小林",
      post_text:"我也爱学习爱学习爱学习",
      time:"刚刚",
      focus: false,
      zan:0,
      comment:0,
      collect:0
  },
  numChange(event) {
    const {num, nameId} = event.detail
    this.setData({
      [nameId]: num
    })
  },
  list:[
    {
      id:0,
      name:"小明",
      post_text:"我爱学习我爱学习我爱学习",
      time:"刚刚",
      focus: false,
      zan:0,
      comment:0,
      collect:0
    },
    {
      id:1,
      name:"小林",
      post_text:"我也爱学习爱学习爱学习",
      time:"刚刚",
      focus: false,
      zan:0,
      comment:0,
      collect:0
    },
    {
      id:2,
      name:"小王",
      post_text:"我爱学习我爱学习",
      time:"刚刚",
      focus: false,
      zan:0,
      comment:0,
      collect:0
    },
  ]
})