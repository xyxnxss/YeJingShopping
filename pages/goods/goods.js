// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsdata: {},
    addressinfo: '',
    show: false,
    a: 1,
    swiperimg: [{
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=179253925,1991244828&fm=26&gp=0.jpg'
      },
      {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=179253925,1991244828&fm=26&gp=0.jpg'
      }
    ],
    details: [
      'http://img5.imgtn.bdimg.com/it/u=1020710965,410231134&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=2728083519,321678799&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=2456844021,1472475407&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=3811978452,3166955705&fm=26&gp=0.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    this.setData({
      goodsdata: wx.getStorageSync('goodsdata')
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
  onClickButton() {
    this.setData({
      show: true
    });
    this.data.a = 1
  },
  onClickButtons() {
    this.setData({
      show: true
    });
    this.data.a = 0
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  popupbut() {
    if (this.data.a == 1) {
      var arrgoodsdata = [],
        a = 0;
      if (wx.getStorageSync('arrgoodsdata').length == 0) {
        arrgoodsdata.push(wx.getStorageSync('goodsdata'))
        wx.setStorageSync('arrgoodsdata', arrgoodsdata)
      } else {
        var arr = wx.getStorageSync('arrgoodsdata')
        for (let i in arr) {
          if (arr[i].id == wx.getStorageSync('goodsdata').id) {
            arr[i] = wx.getStorageSync('goodsdata')
            wx.setStorageSync('arrgoodsdata', arr)
            a = 1
            break
          }
        }
        if (a == 0) {
          var arr = wx.getStorageSync('arrgoodsdata')
          arr.push(wx.getStorageSync('goodsdata'))
          wx.setStorageSync('arrgoodsdata', arr)
        }
      }
      wx.switchTab({
        url: '/pages/mycart/mycart',
      })
    } else if (this.data.a == 0) {
     wx.navigateTo({
       url: '/pages/order/order',
     })
    }
  },
  onChanges(e) {
    this.data.goodsdata.shul = e.detail
    wx.setStorageSync('goodsdata', this.data.goodsdata)
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