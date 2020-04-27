//index.js
Page({
  data: {
    add: '地址选择',
    value: '',
    active: 0,
    actives: 0,
    show: false,
    swiperimg: [{
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=179253925,1991244828&fm=26&gp=0.jpg'
      },
      {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=179253925,1991244828&fm=26&gp=0.jpg'
      }
    ],
    swiperlos: [{
      text: '全国各小区团长招募中'
    }, {
      text: '团长报名咨询***********微信同号'
    }, {
      text: '野境购物，全国一件发货，原产地直发，质优价廉'
    }],
    products: [{
        id:'1',
        shul:'1',
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2291252211,502232831&fm=11&gp=0.jpg',
        name: '陕西白水 苹果岛 优质苹果',
        classs: '这里是产品的种类分类',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '108.00',
        prices: '148.00'
      },
      {
        id: '2',
        shul: '1',
        img: 'http://img1.imgtn.bdimg.com/it/u=233515081,3393072258&fm=26&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '98.00',
        prices: '118.00'
      },
      {
        id: '3',
        shul: '1',
        img: 'http://img2.imgtn.bdimg.com/it/u=3323456994,3247261470&fm=26&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '149.00',
        prices: '180.00'
      },
      {
        id: '4',
        shul: '1',
        img: 'http://img2.imgtn.bdimg.com/it/u=1251906209,2489986491&fm=26&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '108.00',
        prices: '148.00'
      },
      {
        id: '5',
        shul: '1',
        img: 'http://img1.imgtn.bdimg.com/it/u=3321066278,747368999&fm=26&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '108.00',
        prices: '148.00'
      },
      {
        id: '6',
        shul: '1',
        img: 'http://img1.imgtn.bdimg.com/it/u=2140309395,3645102302&fm=26&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '108.00',
        prices: '148.00'
      },
      {
        id: '7',
        shul: '1',
        img: 'http://img4.imgtn.bdimg.com/it/u=2484513852,3184812182&fm=11&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '108.00',
        prices: '148.00'
      },
      {
        id: '8',
        shul: '1',
        img: 'http://img3.imgtn.bdimg.com/it/u=2230958708,281679697&fm=11&gp=0.jpg',
        name: '这里是产品的名字自动省略多余的文本',
        classs: '这里是产品的种类分类自动省略多余的文本',
        num: 99,
        nums: 99,
        time: '2020-03-10',
        times: '2020-03-10',
        price: '108.00',
        prices: '148.00'
      }
    ]
  },
  //事件处理函数
  onLoad: function() {
    wx.showShareMenu({
      // 要求小程序返回分享目标信息
      withShareTicket: true
    })
  },
  onShow: function() {
    if (wx.getStorageSync('addressinfo')) {
      this.setData({
        add: wx.getStorageSync('addressinfo').name
      })
    }
  },
  showPopup() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },
  // 扫码
  search() {
    wx.scanCode({
      success(res) {}
    })
  },
  onChange(event) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 500
    })
  },
  onChanges(event) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 500
    })
  },
  // 地址
  address() {
    var then = this;
    wx.chooseLocation({
      success: function(res) {
        then.setData({
          add: res.name
        })
        wx.setStorageSync('addressinfo', res)
      }
    })
  },
  // 客服
  service() {
    wx.showActionSheet({
      itemList: ['拨打电话', '添加联系人'],
      success(res) {
        if (res.tapIndex == 0) {
          wx.makePhoneCall({
            phoneNumber: '1340000', //仅为示例，并非真实的电话号码
            success() {},
            fail() {},
          })
        } else if (res.tapIndex == 1) {
          wx.addPhoneContact({
            firstName: '000001号客服', //名字（必填）
            photoFilePath: '/images/index_service.png', //头像本地文件路径
            mobilePhoneNumber: '1340000', //手机号
            success() {},
            fail() {}
          })
        }
      },
      fail(res) {}
    })
  },
  /* 转发*/
  onShareAppMessage: function() {
    this.setData({
      show: false
    });
    return {
      path: 'pages/index/index'
    }
  },
  // 跳转invite页面
  invite() {
    this.setData({
      show: false
    })
    wx.navigateTo({
      url: '/pages/poster/poster'
    })
  },
  goods(e) {
    wx.setStorageSync('goodsdata', e.currentTarget.dataset.goods)
    wx.navigateTo({
      url: '/pages/goods/goods' 
    })
  }
})