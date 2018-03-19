// pages/components/station/station.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    station: {
      type: Object,
      value: {
        imgUrl: '',
        desc: ''
      }
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
    stationHandle: function(e) {
      let options = {
        id: e.currentTarget.dataset.id
      };
      this.triggerEvent('stationHandle', options);
    }
  }
})
