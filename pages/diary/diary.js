const date = new Date()
const years = []
const months = []
const days = []

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
  onShareAppMessage() {
    return {
      title: 'picker-view',
      path: 'page/component/pages/picker-view/picker-view'
    }
  },

  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 11,
    days,
    day: 12,
    value: [date.getMonth(), date.getFullYear(), date.getDay()],
    isDaytime: true,
  },

  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[1]],
      month: this.data.months[val[0]],
      day: this.data.days[val[2]],
      isDaytime: !val[3]
    })
  }
})
