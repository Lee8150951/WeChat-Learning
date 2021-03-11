// components/Tabs/Tabs.js
Component({
  /**
   * 用于存放要从父组件接收到的数据
   */
  properties: {
    tabs: {
      // type表示要接受的数据类型
      type: Array,
      // value表示默认值
      value: ""
      // 用的时候当成data中的数据直接用即可
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) {
      // 点击事件触发父组件自定义事件同时传数据给父组件
      // this.triggerEvent("父组件自定义事件的名称", 要传递的参数)
      // ES6解构赋值
      const {index} = e.target.dataset;
      // 触发父组件事件
      this.triggerEvent("itemChange", {index})
    }
  }
})
