import echarts from 'echarts'
import 'echarts/map/js/china'
function init (id) {
  // eslint-disable-next-line no-undef
  var myChart = echarts.init(document.getElementById(id))
  var option = null
  var dataList = [
    {name: '南海诸岛', value: 0},
    {name: '北京', value: 206},
    {name: '天津', value: 57},
    {name: '上海', value: 83},
    {name: '重庆', value: 239},
    {name: '河北', value: 86},
    {name: '河南', value: 377},
    {name: '云南', value: 57},
    {name: '辽宁', value: 52},
    {name: '黑龙江', value: 250},
    {name: '湖南', value: 298},
    {name: '安徽', value: 344},
    {name: '山东', value: 429},
    {name: '新疆', value: 49},
    {name: '江苏', value: 213},
    {name: '浙江', value: 447},
    {name: '江西', value: 320},
    {name: '湖北', value: 46418},
    {name: '广西', value: 143},
    {name: '甘肃', value: 13},
    {name: '山西', value: 45},
    {name: '内蒙古', value: 48},
    {name: '陕西', value: 85},
    {name: '吉林', value: 37},
    {name: '福建', value: 122},
    {name: '贵州', value: 45},
    {name: '广东', value: 581},
    {name: '青海', value: 0},
    {name: '西藏', value: 0},
    {name: '四川', value: 262},
    {name: '宁夏', value: 15},
    {name: '海南', value: 58},
    {name: '台湾', value: 25},
    {name: '香港', value: 61},
    {name: '澳门', value: 50}
  ]

  option = {
    tooltip: {
      formatter: function (params, ticket, callback) {
        return params.seriesName + '<br />' + params.name + '：' + params.value
      } // 数据格式化
    },
    toolbox: {
      // toolbox是echarts统一的工具条，支持下载、查看数据等操作
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    visualMap: {
      type: 'piecewise',
      pieces: [
        {min: 900, color: '#84142d'},
        {min: 500, max: 900, color: '#c02739'},
        {min: 300, max: 500, color: '#c81912'},
        {min: 50, max: 300, color: '#f64b3c'},
        {min: 20, max: 50, color: '#fb8d62'},
        {min: 1, max: 20, color: '#fdd365'},
        {max: 0, color: '#f1fcfc'}
      ],
      left: 'left',
      top: 'bottom',
      inRange: {
        color: ['rgb(255, 255, 255)', 'rgb(204, 41, 41)', 'rgb(102, 2, 8)'] // 取值范围的颜色,数量自定
      },
      show: true // 图注
    },
    geo: {
      // geo是设置地图区域的关键，不知道为什么官方实例里竟然没给
      map: 'china',
      roam: false, // 不开启缩放和平移
      zoom: 1.23, // 视角缩放比例
      label: {
        normal: {
          show: true,
          fontSize: '10',
          color: 'rgba(0,0,0,0.7)'
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(0, 0, 0, 0.5)' // 这就是大家熟悉的rgb+透明度的写法了
        },
        emphasis: {
          areaColor: '#f6da63', // 鼠标选择区域颜色
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    series: [
      {
        name: '确诊人数',
        type: 'map',
        geoIndex: 0,
        data: dataList
      }
    ]
  }
  myChart.setOption(option)
  myChart.on('click', function (params) {
  })
}
export {
  init
}
