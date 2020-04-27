// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    falseName: false,
    falsebut: true,
    addressinfo: '',
    orderflex: [{
        img: '/images/mine_dfk.png',
        text: '待付款'
      },
      {
        img: '/images/mine_dps.png',
        text: '待配送'
      },
      {
        img: '/images/mine_dth.png',
        text: '待提货'
      },
      {
        img: '/images/mine_yth.png',
        text: '已提货'
      },
      {
        img: '/images/mine_shfw.png',
        text: '售后服务'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var then = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              then.setData({
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl,
                falseName: true,
                falsebut: false
              })
              wx.setStorageSync("nickName", res.userInfo.nickName)
              wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
            }
          })
        } else {}
      }
    })
    if (wx.getStorageSync('addressinfoaddress')) {
      this.setData({
        addressinfo: wx.getStorageSync('addressinfoaddress')
      })
    } else {
      if (wx.getStorageSync('addressinfo')) {
        this.setData({
          addressinfo: wx.getStorageSync('addressinfo')
        })
      }
    }
  },
  bindGetUserInfo(e) {
    if (e.detail.userInfo) {
      var that = this;
      this.onLoad()
    } else {}
  },
  address() {
    var then = this;
    wx.showActionSheet({
      itemList: ['获取当前地址', '获取收货地址'],
      success(res) {
        if (res.tapIndex == 0) {
          wx.chooseLocation({
            success: function(res) {
              then.setData({
                addressinfo: res
              })
              wx.setStorageSync('addressinfo', res)
            }
          })
        } else if (res.tapIndex == 1) {
          wx.chooseAddress({
            success(res) {
              var addressinfoaddress = {
                name: res.userName,
                address: res.provinceName + res.cityName + res.countyName + res.detailInfo
              }
              then.setData({
                addressinfo: addressinfoaddress
              })
              wx.setStorageSync('addressinfoaddress', addressinfoaddress)
            }
          })
        }
      },
      fail(res) {}
    })
  },
  service() {
    wx.makePhoneCall({
      phoneNumber: '1340000', //仅为示例，并非真实的电话号码
      success() {},
      fail() {},
    })
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