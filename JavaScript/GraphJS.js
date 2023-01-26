
document.addEventListener("DOMContentLoaded", function() {
Highcharts.chart('container', {
title: {
text: 'ScatterPlot',
align: 'center'
},
chart:{
type: 'scatter',
},
yAxis: {
title: {
    text: 'Residual Voltage (%Declared)',   
},
categories: [0,20,40,60,80,100,120],
tickInterval: 20,
tickAmount: 7
},
xAxis: {
tickAmount: 6,
type: 'linear',
minorTickInterval: 'auto',
},
plotOptions: {
series: {
    lineWidth: 0,
    label: {
        connectorAllowed: false
    },
}
}, 

series: [{
type: 'polygon',
name: 'Swell',
data: [[0.02,110],[3,110],[3,120],[0.02,120]],    
color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
 dashStyle: 'solid'
},{
name:'Over Voltage',
label: 'Over Voltage',
type: 'polygon',
data: [[3,110],[1000,110],[1000,120],[3,120]],  
color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get() 
},{
name:'Under Voltage',
label: 'Under Voltage',
type: 'polygon',
data: [[3,10],[1000,10],[1000,90],[3,90]],  
color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get() 
},{
name:'Interruption',
label: 'Interruption',
type: 'polygon',
data: [[3,0],[1000,0],[1000,10],[3,10]],  
color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get() 
},{
name:'T',
label: 'T',
type: 'polygon',
data: [[0.02,0],[0.6,0],[0.6,40],[0.02,40]],  
color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get() 
},{
name:'',
label: '',
type: 'polygon',
data: [[0.6,0],[3,0],[3,35],[0.6,35],null,[0.6,85],[3,85],[3,90],[0.6,90],null,[0.15,80],[0.6,80],[0.6,90],[0.15,90]], 
color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get() 
},{
name:'Z2',
label: 'Z2',
type: 'polygon',
data: [[0.6,35],[3,35],[3,70],[0.6,70]], 
color: Highcharts.Color(Highcharts.getOptions().colors[7]).setOpacity(0.5).get() 
},{
name:'Z1',
label: 'Z1',
type: 'polygon',
data: [[0.6,70],[3,70],[3,85],[0.6,85]], 
color: Highcharts.Color(Highcharts.getOptions().colors[8]).setOpacity(0.5).get() 
},{
name:'S',
label: 'S',
type: 'polygon',
data: [[0.15,40],[0.6,40],[0.6,80],[0.15,80]], 
color: Highcharts.Color(Highcharts.getOptions().colors[9]).setOpacity(0.5).get() 
},{
name:'X2',
label: 'X2',
type: 'polygon',
data: [[0.02,40],[0.15,40],[0.15,60],[0.02,60]], 
color: Highcharts.Color(Highcharts.getOptions().colors[10]).setOpacity(0.5).get() 
},{
name:'X1',
label: 'X1',
type: 'polygon',
data: [[0.02,60],[0.15,60],[0.15,70],[0.02,70]], 
color: Highcharts.Color(Highcharts.getOptions().colors[11]).setOpacity(0.5).get() 
},{
name:'Y',
label: 'Y',
type: 'polygon',
data: [[0.02,70],[0.15,70],[0.15,90],[0.02,90]], 
color: Highcharts.Color(Highcharts.getOptions().colors[12]).setOpacity(0.5).get() 
},{
name: 'Plot Point', //Data pulls into this Array
data: [{x:0.9,y:70},{x:0.2,y:120},{x:0.001,y:120},{x:0.1, y:90},{x:0.15,y:77},{x:13,y:120}],
}], 
responsive: {
rules: [{
    condition: {
        maxWidth: 500
    },
    chartOptions: {
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        }
    }
}]
},
});
});