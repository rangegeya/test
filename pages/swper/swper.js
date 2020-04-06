// pages/swper/swper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Lists:[
      {id:1,timu:"蝙蝠是无辜的吗？0",xuan1:"是",xuan2:"不是",xuan3:"",xuan4:"",answer:"1"},
      {id:3,timu:"蝙蝠是无辜的吗?？1",xuan1:"是?",xuan2:"不是?",xuan3:"可能是？",xuan4:"绝对不是",answer:"3"},
      {id:5,timu:"蝙蝠是无辜的吗?？2",xuan1:"是?",xuan2:"不是?",xuan3:"可能是？",xuan4:"绝对不是",answer:"3"},
      {id:5,timu:"蝙蝠是无辜的吗?？3",xuan1:"是?",xuan2:"不是?",xuan3:"可能是？",xuan4:"绝对不是",answer:"3"},
      {id:8,timu:"蝙蝠是无辜的吗?？4",xuan1:"是?",xuan2:"不是?",xuan3:"可能是？",xuan4:"绝对不是",answer:"3"},
      {id:6,timu:"蝙蝠是无辜的吗?？5",xuan1:"是?",xuan2:"不是?",xuan3:"可能是？",xuan4:"绝对不是",answer:"3"}
    ],
    currentTab:0,//swiper是哪个
    currentid:0,//当前所答的题
    length:0,//数组长度  提的个个数
    selectedLists:[],//答题结果
  },

  //进行答题
  selected: function(e){
      console.log(e)
      var that = this
      var currentTab = that.data.currentTab
      console.log(currentTab)
      var myanswer = parseInt (e.target.dataset.myanswer)
      var currentid =  e.currentTarget.dataset.currentid
      var answer = parseInt(e.currentTarget.dataset.answer)
      var selectedLists = that.data.selectedLists
      selectedLists.push({
        'id':currentid,
        'myanswer':myanswer,
        'answer':answer,
        'currentTab':currentTab
        })
        console.log(selectedLists)
      selectedLists = this.unique5(selectedLists)

      that.setData({
        selectedLists:selectedLists
      })
     
  },
   unique5:function(array){
    var r = [];
    for(var i = 0, l = array.length; i < l; i++) {
     for(var j = i + 1; j < l; j++)
      if (array[i].id === array[j].id) j = ++i;
     r.push(array[i]);
    }
    return r;
   },
   //题跳转
  changeIndex: function(e){
    var that = this 
    var currentTab = e.target.dataset.tiaotarget
    that.setData({
      currentTab :currentTab
    })
  },
  switchTab:function(e){
    console.log(e)
    this.setData({
        currentTab:e.detail.current
    });
    
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this 
    var length = that.data.Lists.length
    that.setData({
      length :length
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})