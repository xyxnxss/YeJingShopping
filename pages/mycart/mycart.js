// pages/mycart/mycart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    power: true,
    powers: false,
    money: 0,
    moneys: [],
    addressinfoaddress: '选择地址',
    products: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              that.setData({
                power: false,
                powers: true
              })
              wx.setStorageSync("nickName", res.userInfo.nickName)
              wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
            }
          })
        } else {}
      }
    })
  },
  bindGetUserInfo(e) {
    var that = this;
    if (e.detail.userInfo) {
      that.onLoad()
    } else {}
  },
  // 步进器
  onChanges(event) {
    var then = this;
    for (let l in then.data.products) {
      if (event.currentTarget.dataset.ids == then.data.products[l].id) {
        then.data.products[l].shul = event.detail
      }
    }
    wx.setStorageSync('arrgoodsdata', then.data.products)
    var shu = 0;
    for (let i in then.data.products) {
      shu += (+then.data.products[i].price * 100 * +then.data.products[i].shul)
    }
    then.setData({
      money: shu
    })
  },
  tips() {
    var then = this
    wx.chooseAddress({
      success(res) {
        var addressinfoaddress = {
          name: res.userName,
          address: res.provinceName + res.cityName + res.countyName + res.detailInfo
        }
        then.setData({
          addressinfoaddress: addressinfoaddress
        })
        wx.setStorageSync('addressinfoaddress', addressinfoaddress)
      }
    })
  },
  onClickButton() {
    wx.showToast({  
      title: '该功能未上线！暂将跳转首页',
        icon: 'none',
        duration: 1000
    })
    setTimeout(function() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }, 1500);
  },
  // 删除
  shancu(e) {
    var then = this,
      arr = then.data.products
    for (let i in arr) {
      if (e.currentTarget.dataset.idy == arr[i].id) {
        arr.splice([i], 1)
      }
    }
    wx.setStorageSync('arrgoodsdata', arr)
    // 渲染
    then.setData({
      products: wx.getStorageSync('arrgoodsdata')
    })
    var shu = 0;
    for (let i in then.data.products) {
      shu += (+then.data.products[i].price * 100 * +then.data.products[i].shul)
    }
    then.setData({
      money: shu
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var then = this;
    if (wx.getStorageSync("nickName")) {
      then.setData({
        power: false,
        powers: true
      })
    }
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
    // 渲染
    this.setData({
      products: wx.getStorageSync('arrgoodsdata')
    })
    var shu = 0;
    for (let i in then.data.products) {
      shu += (+then.data.products[i].price * 100 * +then.data.products[i].shul)
    }
    this.setData({
      money: shu
    })
  }
})