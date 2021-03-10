// pages/demo06/demo06.js
Page({
  data: {
    html_1: '<div>Hello Rich-Text</div>',
    html_2: [
      {
        name: 'div',
        attrs: {
          class: 'myDiv',
          style: 'color:red;'
        },
        children: [
          {
            name: 'p',
            attrs: {},
            children: [
              {
                type: 'text',
                text: 'hello'
              }
            ]
          }
        ]
      }
    ],
    gender: "",
    fruit: [],
    list: [
      {
        id: 0,
        name: "apple",
        value: "apple"
      },
      {
        id: 1,
        name: "pear",
        value: "pear"
      },
      {
        id: 2,
        name: "banana",
        value: "banana"
      }
    ]
  },
  handleChange(e) {
    this.setData({
      gender: e.detail.value
    })
  },
  handleItemChange(e) {
    this.setData({
      fruit: e.detail.value
    })
  }
})