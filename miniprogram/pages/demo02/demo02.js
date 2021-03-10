// pages/demo02/demo02.js
Page({
  data: {
    num: 0
  },
  // 输入框input执行逻辑
  handleInput(e) {
    this.setData({
      num: e.detail.value
    })
  },
  // 加减法
  handleTap(e) {
    // 获取自定义属性
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
  }
})