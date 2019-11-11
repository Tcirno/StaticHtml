var worldMapContainer = document.getElementById('chart');



//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {
    // window.alert(document.getElementById("col").offsetHeight);
    // window.alert(document.getElementById("col").offsetWidth);
    // worldMapContainer.style.width = document.getElementById("col").offsetWidth-1 + 'px';
    // worldMapContainer.style.height = document.getElementById("col").offsetHeight-1 + 'px';
    // window.alert(worldMapContainer.style.width);
    // window.alert(worldMapContainer.style.height);
    worldMapContainer.style.width = window.innerWidth/2 + 'px';
    worldMapContainer.style.height = window.innerHeight/2 + 'px';
    //rem单位
    //worldMapContainer.style.width = window.innerWidth/750*690+'px';
    //worldMapContainer.style.height = window.innerHeight/750*600+'px';
};
//设置容器高宽
resizeWorldMapContainer();
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(worldMapContainer);

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        height: worldMapContainer.style.height,
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
myChart.setOption(option);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    resizeWorldMapContainer();
    myChart.resize();
};
