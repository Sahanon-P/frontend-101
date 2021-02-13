window.onload = function () {

var dps1 = []; // dataPoints for slot 1
var dps2 = []; // dataPoints for slot 2
var dps3 = []; // dataPoints for slot 3
var dps4 = []; // dataPoints for slot 4

var chart1 = new CanvasJS.Chart("slot1Chart", {
	title :{ text: "Slot-1 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps1}]
});
var chart2 = new CanvasJS.Chart("slot2Chart", {
	title :{ text: "Slot-2 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps2}]
});
var chart3 = new CanvasJS.Chart("slot3Chart", {
	title :{ text: "Slot-3 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps3}]
});
var chart4 = new CanvasJS.Chart("slot4Chart", {
	title :{ text: "Slot-4 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps4}]
});
var xVal = 0;
var yVal = 100; 
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps1.push({x: xVal, y: yVal });
		dps2.push({x: xVal, y: yVal });
		dps3.push({x: xVal, y: yVal });
		dps4.push({x: xVal, y: yVal });
		xVal++;
	}

	if (dps1.length > dataLength) { dps1.shift(); }
	if (dps2.length > dataLength) { dps2.shift(); }
	if (dps3.length > dataLength) { dps3.shift(); }
	if (dps4.length > dataLength) { dps4.shift(); }
	chart1.render();
	chart2.render();
	chart3.render();
	chart4.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}