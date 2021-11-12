Component({
  properties: {
    url: {
      type: String,
      value: "http://m.qpic.cn/psc?/V513EChq0TBwUB2Wzg9r2UtSsk4U2iiH/45NBuzDIW489QBoVep5mcbbGbAfiug3EpeoSwBiMuqcgavHmBz7NW1GNY0as6rrrWxwER9svKOZ.F3xgeMg76BHfEdVrqD0ivW5rRqt9RoU!/b&bo=hwZVAQAAAAADN8c!&rf=viewer_4",
    },
    count: {
      type: String,
      value: 3,  //图片数量
    },
    width: {
      type: String,
      value: 557,
    },
    height: {
      type: String,
      value: 400,
    },
    duration: {  //播放一次时间
      type: String,
      value: 0.3,
    },
    playNumber: {   //播放次数
      type: String,
      value: 10,
    },
  },
  data: {},
  attached() {
    if (this.data.playNumber > 0) {
      setTimeout(() => {
        this.triggerEvent("end");
      }, this.data.playNumber * this.data.duration * 1000);
    }
  },
  methods: {},
});
