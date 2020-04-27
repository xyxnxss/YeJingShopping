// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    date: '预计04-18（周六）可自提',
    dates: true,
    goodsdata: '',
    price: '',
    username: '',
    phone: '',
    addressinfoaddress: '',
    address: '',
    addressed: ''
  },
  onChange(event) {
    wx.showToast({
      title: '配送变更，费用已变化',
      icon: 'none'
    });
    if (event.detail.index == 0) {
      this.setData({
        date: '预计04-18（周六）可自提',
        dates: true
      })
    } else if (event.detail.index == 1) {
      this.setData({
        date: '预计04-18（周六）站长配送',
        dates: true
      })
    } else {
      this.setData({
        dates: false,
      })
    }
  },
  but() {
    wx.showToast({
      title: '该功能暂未上线！将跳至首页',
      icon: 'none',
      duration: 1000
    })
    setTimeout(function() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }, 1500)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      goodsdata: wx.getStorageSync('goodsdata'),
      price: +wx.getStorageSync('goodsdata').price * wx.getStorageSync('goodsdata').shul
    })
    if (wx.getStorageSync('addressinfoaddress')) {
      this.setData({
        addressinfoaddress: wx.getStorageSync('addressinfoaddress')
      })
    } else {
      if (wx.getStorageSync('addressinfo')) {
        this.setData({
          addressinfoaddress: wx.getStorageSync('addressinfo')
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})