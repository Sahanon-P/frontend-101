window.onload = function () {
	
var dps1 = []; var dps2 = []; var dps3 = []; var dps4 = [];

var chart1 = new CanvasJS.Chart("slot1Chart", {
	title :{ text: "Slot-1 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps1}],
	backgroundColor: "rgba(225,150,150,0.25)"
});
var chart2 = new CanvasJS.Chart("slot2Chart", {
	title :{ text: "Slot-2 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps2}],
	backgroundColor: "rgba(78,202,140,0.25)"
});
var chart3 = new CanvasJS.Chart("slot3Chart", {
	title :{ text: "Slot-3 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps3}],
	backgroundColor: "rgba(78,171,202,0.25)"
});
var chart4 = new CanvasJS.Chart("slot4Chart", {
	title :{ text: "Slot-4 Report"},
	axisY: { title: "Total Income(Coin)"}, axisX: { title: "Time(s)"},
	data: [{type: "column", dataPoints: dps4}],
	backgroundColor: "rgba(202,181,78,0.25)"
});
var xVal = 0;
var yVal1 = 0; var yVal2 = 0; var yVal3 = 0; var yVal4 = 0;

var updateInterval = 1000; // update is called every 1 second
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		fetch("https://backend.cpsk-club.xyz/6210503659") // this should be backend's json url {"",""}
        .then(response => response.json())
        .then((data) => {
            yVal1 = parseInt(data.answer); // this should be data.Car1Total
			yVal2 = parseInt(data.answer); // this should be data.Car2Total
			yVal3 = parseInt(data.answer); // this should be data.Car3Total
			yVal4 = parseInt(data.answer); // this should be data.Car4Total
			console.log(data)
        });

		dps1.push({x: xVal, y: yVal1 });
		dps2.push({x: xVal, y: yVal2 });
		dps3.push({x: xVal, y: yVal3 });
		dps4.push({x: xVal, y: yVal4 });
		xVal++;
	}
	
	/*for (var j = 0; j < count; j++) {
		fetch("https://backend.cpsk-club.xyz/twitter") // this should be backend's json url [{"",""},{"",""}]
        .then(response => response.json())
		.then((datas) => {
            yVal1 = datas[0].total_money; // Car1
			yVal2 = datas[1].total_money; // Car2
			yVal3 = datas[2].total_money; // Car3
			yVal4 = datas[3].total_money; // Car4
        });
		dps1.push({x: xVal, y: yVal1 });
		dps2.push({x: xVal, y: yVal2 });
		dps3.push({x: xVal, y: yVal3 });
		dps4.push({x: xVal, y: yVal4 });
		xVal++;
	}*/

	if (dps1.length > dataLength) { dps1.shift(); }
	if (dps2.length > dataLength) { dps2.shift(); }
	if (dps3.length > dataLength) { dps3.shift(); }
	if (dps4.length > dataLength) { dps4.shift(); }
	chart1.render(); chart2.render(); chart3.render(); chart4.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}