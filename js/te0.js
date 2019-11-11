var worldMapContainer1 = document.getElementById('col1');
var worldMapContainer2 = document.getElementById('col1');
var worldMapContainer3 = document.getElementById('col1');

var resizeWorldMapContainer = function () {
    worldMapContainer1.style.width = document.getElementById("col1").offsetWidth - 1 + 'px';
    worldMapContainer2.style.width = document.getElementById("col2").offsetWidth - 1 + 'px';
    worldMapContainer3.style.width = document.getElementById("col3").offsetWidth - 1 + 'px';
};

// 指定图表的配置项和数据
resizeWorldMapContainer();
var myChart1 = echarts.init(worldMapContainer1);
var option1 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        width: worldMapContainer1.style.width
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 1]
    }]
};

var myChart2 = echarts.init(worldMapContainer2);
var option2 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        width: worldMapContainer2.style.width
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 10]
    }]
};

var myChart3 = echarts.init(worldMapContainer3);
var option3 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        width: worldMapContainer3.style.width
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 50]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
window.onresize = function () {
    //重置容器高宽
    resizeWorldMapContainer();
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    resizeWorldMapContainer();
};
