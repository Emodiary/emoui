Component({
  properties: {
    nameId: {
      type: String
    },
    num: {
      type: Number,
      value: 0
    },
    int: {
      type: Number,
      value: 1
    },
    min: {
      type: Number,
      value: 0
    }
  },
  data: {
  },
  methods: {
    numChange() {
      this.triggerEvent('numChange', {
        num: this.properties.num,
        nameId: this.properties.nameId
      })
    },
    add() {
      this.setData({
        num: this.properties.num + this.properties.int
      })
      this.numChange()
    },
    sub() {
      this.setData({
        num: this.properties.num - this.properties.int
      })
      this.numChange()
    }
  }
})