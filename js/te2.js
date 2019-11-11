var worldMapContainer = document.getElementById('col2');

var resizeWorldMapContainer = function () {
    worldMapContainer.style.width = document.getElementById("col2").offsetWidth - 1 + 'px';
};

// 指定图表的配置项和数据
resizeWorldMapContainer();
var myChart2 = echarts.init(worldMapContainer);
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        width: worldMapContainer.style.width
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option);
window.onresize = function () {
    //重置容器高宽
    resizeWorldMapContainer();
    myChart2.resize();
};
