// pages/swper1/swper1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //题   所以背题模式就是把正确答案的选项 checked 属性设置为 true。 checked = true
    question: [{
      options: [{ checked: false, name: "夹具不牢固导致物件飞出伤人", value: "0" },
      { checked: false, name: "金属切屑飞出伤人", value: "1" },
      { checked: false, name: "红眼病", value: "2" },
      { checked: false, name: "机器漏电", value: "3" }
      ],
      rightnumber: 2,
      myanswer: [],
      answercontent: [],  //保留第一次答题的记录
      answer: [0, 1],
      answered: false,
      rightandwrong: 0,
      title: "下列哪种伤害不属于机械伤害的范围?11( )",
      id: 1
    },
    {
      options:
        [{ checked: false, name: "夹具不牢固导致物件飞出伤人", value: "0" },
        { checked: false, name: "金属切屑飞出伤人", value: "1" },
        { checked: false, name: "红眼病", value: "2" },
        { checked: false, name: "机器漏电", value: "3" }],
      rightnumber: 3,
      myanswer: [],
      answercontent: [],
      answer: [0, 1, 3],
      answered: false,
      rightandwrong: 0,
      title: "下列哪种伤害不属于机械伤害的范围?22( )",
      id: 2
    },
    {
      options:
        [{ checked: false, name: "夹具不牢固导致物件飞出伤人", value: "0" },
        { checked: false, name: "金属切屑飞出伤人", value: "1" },
        { checked: false, name: "红眼病", value: "2" },
        { checked: false, name: "机器漏电", value: "3" }],
      rightnumber: 2,
      myanswer: [],
      answercontent: [],
      answer: [1, 3],
      answered: false,
      rightandwrong: 0,
      title: "下列哪种伤害不属于机械伤害的范围?33( )",
      id: 3
    }

    ],
    currentTab: 0,//当前的id号
    isRuleTrue: false,//显示弹窗与否
    length: 0,//题的个数
    right: 0,//答对的个数
    wrong: 0,//答错的个数
  },
  choose: function (e) {
    var that = this
    var currentTab = that.data.currentTab
    var index = e.currentTarget.dataset.index
    var answer = e.currentTarget.dataset.answer
    var value = e.currentTarget.dataset.value

    var question = that.data.question
    //选择哪个选项
    for (let i = 0; i < question[currentTab].options.length; i++) {
      question[currentTab].options[i].checked = false
    }
    question[currentTab].options[index].checked = true
    //设置题是否被答过
    question[currentTab].answered = true
    //答对还是答错
    if (answer == value) {
      question[currentTab].rightandwrong = 1
    } else {
      question[currentTab].rightandwrong = -1
    }
    this.answerwrong()
    this.answerrigth()
    console.log(e)
    console.log(currentTab)
    console.log(index)
    that.setData({
      question: question,
    })
  },
  checkboxChange: function (e) {
    var that = this
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var question = that.data.question
    var currentTab = that.data.currentTab
    var length = question[currentTab].rightnumber
    var answer = question[currentTab].answer
    var myanswer = e.detail.value
    if (myanswer.length < length) {
      if (question[currentTab].answered == true) {
        for (let i = 0; i < myanswer.length; i++) {
          question[currentTab].options[answer[i]].checked = true
          // 0,1,2,3
        }
        that.setData({
          question: question,
        })

      } else {
        // for (let i = 0; i < myanswer.length; i++) {
        //   question[currentTab].options[myanswer[i]].checked = true
        //   // 0,1,2,3
        // }
      }
    }
    else {
      var answerstring = answer.sort().toString()
      var myanswerstring = myanswer.sort().toString()

      question[currentTab].myanswer = myanswer
      //答对了
      if (answerstring == myanswerstring) {
        //对了
        if (question[currentTab].answered == false) {
          question[currentTab].rightandwrong = 1
          question[currentTab].answercontent = [].concat(myanswer)
        }
        for (let i = 0; i < length; i++) {
          question[currentTab].options[answer[i]].checked = true
        }
      } else {
        //对了
        if (question[currentTab].answered == false) {
          question[currentTab].rightandwrong = -1
          question[currentTab].answercontent = [].concat(myanswer)
        }
        for (let i = 0; i < 4; i++) {
          question[currentTab].options[i].checked = false
        }
        for (let i = 0; i < length; i++) {
          question[currentTab].options[answer[i]].checked = true
        }
      }

      // answerhtml = []
      var answer26 = []
      var myanswer26 = []
      for (let i = 0; i < answer.length; i++) {
        answer26.push(String.fromCharCode(answer[i] + 65))
      }
      for (let j = 0; j < question[currentTab].answercontent.length; j++) {
        let t = parseInt(question[currentTab].answercontent[j])
        myanswer26.push(String.fromCharCode(t + 65))
      }
      var arr = []
      for (let i = 0; i < answer.length; i++) {
        var a = answer26.indexOf(myanswer26[i]);
        if (a > -1) {
          var t = "<div style='line-height: 60px; color: green;'>" + myanswer26[i] + "</div>"
          arr.push(t)
        } else {
          var t = "<div style='line-height: 60px; color: red;'>" + myanswer26[i] + "</div>"
          arr.push(t)
        }
      }
      console.log(arr)
      question[currentTab].html = arr

      question[currentTab].answer26 = answer26
      question[currentTab].myanswer26 = myanswer26
      console.log(answer26)
      console.log(myanswer26)
      console.log("----------------")
      console.log("----------------")
      // var answer26 =
      //   myanswer26


      question[currentTab].answered = true


      var numwrong = 0
      var numright = 0
      for (let i = 0; i < question.length; i++) {
        if (question[i].rightandwrong == -1) {
          numwrong = numwrong + 1;
        }
        if (question[i].rightandwrong == 1) {
          numright = numright + 1;
        }
      }
      that.setData({
        question: question,
        wrong: numwrong,
        right: numright,
      })
      // that.answerwrong()
      // that.answerrigth()
    }
  },
  // 切換題
  switchTab: function (e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    });
  },
  //题跳转
  changeIndex: function (e) {
    var that = this
    var currentTab = e.target.dataset.tiaotarget
    that.setData({
      currentTab: currentTab
    })
    setTimeout(function () {
      that.hideRule()
    }, 300)
  },
  // 显示透明弹窗
  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },
  //关闭透明层
  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var length = that.data.question.length
    that.setData({
      length: length
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