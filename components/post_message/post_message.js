Component({
  data: {
    name:"小明",
    post_text:"我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习",
    time:"刚刚",
    focus: false,
    zan:0,
    comment:0,
    collect:0
  },
  
  handleInput(e){
    this.setData({
      zan: e.detail.value
    })
  },
  handletap(e){
    this.setData({
      num:this.data.num + operation
    })
  }
})