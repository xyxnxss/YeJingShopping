// pages/poster/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backurl: '/images/wxhb.jpg',
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587094008070&di=24ae8a316ec87d261209187ee596ba1d&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20180418%2Fshishangdaqibaixiangguoshuiguohaibao_9349215.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this,
      backurl = that.data.backurl;
    // 获取当前系统的信息
    wx.getSystemInfo({
      success(res) {
        var windowWidth = res.windowWidth
        var windowHeight = res.windowHeight
        // 在画布绘制图像，背景图片宽高为用户手机屏幕宽高，二维码设置居中。
        const ctx = wx.createCanvasContext('mycan')
        ctx.drawImage(backurl, 0, 0, windowWidth, windowHeight)
        ctx.draw() //重绘页面
      }
    })
  },
  previewImage(e) {
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src]
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