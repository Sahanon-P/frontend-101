window.onload = function () {
	
var dps1 = []; var dps2 = []; var dps3 = []; var dps4 = [];

var chart1 = new CanvasJS.Chart("slot1Chart", {
	title :{ text: "Slot-1 Report",horizontalAlign: "left"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)", interval: 1},
	data: [{type: "column", dataPoints: dps1}],
	backgroundColor: "rgba(225,150,150,0.25)",
});
var chart2 = new CanvasJS.Chart("slot2Chart", {
	title :{ text: "Slot-2 Report",horizontalAlign: "left"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)", interval: 1},
	data: [{type: "column", dataPoints: dps2}],
	backgroundColor: "rgba(78,202,140,0.25)",
});
var chart3 = new CanvasJS.Chart("slot3Chart", {
	title :{ text: "Slot-3 Report",horizontalAlign: "left"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)", interval: 1},
	data: [{type: "column", dataPoints: dps3}],
	backgroundColor: "rgba(78,171,202,0.25)",
});
var chart4 = new CanvasJS.Chart("slot4Chart", {
	title :{ text: "Slot-4 Report",horizontalAlign: "left"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)", interval: 1},
	data: [{type: "column", dataPoints: dps4}],
	backgroundColor: "rgba(202,181,78,0.25)",
});
var xVal = 0;
var yVal1 = 0; var yVal2 = 0; var yVal3 = 0; var yVal4 = 0;

var updateInterval = 1000; // update is called every 1 seconds
var dataLength = 5; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		//fetch(`https://exceed7.cpsk-club.xyz/parking?slot=1`,{  method: "GET", headers: {"Content-Type": "application/json"},})
		fetch("https://raw.githubusercontent.com/Sahanon-P/frontend-101/master/sample.json")
        .then(response => response.json())
		.then((data) => {
            yVal1 = data.result.money;
        });
		dps1.push({x: xVal, y: yVal1 });
	}
	for (var j = 0; j < count; j++) {
		//fetch(`https://exceed7.cpsk-club.xyz/parking?slot=2`,{  method: "GET", headers: {"Content-Type": "application/json"},})
		fetch("https://raw.githubusercontent.com/Sahanon-P/frontend-101/master/sample.json")
        .then(response => response.json())
		.then((data) => {
            yVal2 = data.result2.money;
        });
		dps2.push({x: xVal, y: yVal2 });
	}
	for (var j = 0; j < count; j++) {
		//fetch(`https://exceed7.cpsk-club.xyz/parking?slot=3`,{  method: "GET", headers: {"Content-Type": "application/json"},})
		fetch("https://raw.githubusercontent.com/Sahanon-P/frontend-101/master/sample.json") 
        .then(response => response.json())
		.then((data) => {
            yVal3 = data.result3.money;
        });
		dps3.push({x: xVal, y: yVal3 });
	}
	for (var j = 0; j < count; j++) {
		//fetch(`https://exceed7.cpsk-club.xyz/parking?slot=4`,{  method: "GET", headers: {"Content-Type": "application/json"},})
		fetch("https://raw.githubusercontent.com/Sahanon-P/frontend-101/master/sample.json") 
        .then(response => response.json())
		.then((data) => {
            yVal4 = data.result4.total_money; 
        });
		dps4.push({x: xVal, y: yVal4 });
	}
	
	if(yVal1 != 0 && yVal2 != 0 &&  yVal3 != 0 &&  yVal4 != 0) // don't forward x-axis while initializing
			xVal++;

	if (dps1.length > dataLength) { dps1.shift(); }
	if (dps2.length > dataLength) { dps2.shift(); }
	if (dps3.length > dataLength) { dps3.shift(); }
	if (dps4.length > dataLength) { dps4.shift(); }
	chart1.render(); chart2.render(); chart3.render(); chart4.render();
};

updateChart(dataLength);
setTimeout(function(){updateChart()}, 1000); // 1 second delay for initializing chart
setInterval(function(){updateChart()}, updateInterval);

}