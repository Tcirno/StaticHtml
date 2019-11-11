var myChart = echarts.init(document.getElementById('11'));
// var myChart = echarts.init(document.getElementById('main'));

var h = document.getElementById("allin").offsetHeight;
var w = document.getElementById("allin").offsetWidth;

document.getElementById("main").style.height = h +"px";
document.getElementById("main").style.width = w +"px";

window.alert(document.getElementById("main").offsetHeight);
window.alert(document.getElementById("main").offsetWidth);

// window.alert(h)
// window.alert(w)

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    grid: {
        top: "20px",
        left: "20px",
        right: "20px",
        bottom: "20px",
        containLabel: true
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        // radius: '100%',
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。


// window.onresize = function () {
//     var i = 100;
//     for (; i <= 100;) {
//         // window.alert(i);
//         i += 20;
//         document.getElementById('main').style.height = i + 'px';
//         myChart.resize();//直接加这句即可
//     }
// }
window.onresize = function () {
    myChart.resize();
    //myChart1.resize();    //若有多个图表变动，可多写
};
// window.addEventListener("resize", function () {
//     myChart.resize();
// });
myChart.setOption(option);