$(document).ready(function(){
	var ctx = $("#mycanvas").get(0).getContext("2d");

	var data = [
		{
			value: 270,
			color: "cornflowerblue",
			highlight: "lightskyblue",
			label: "Mutual Funds"
		},
		{
			value: 50,
			color: "lightgreen",
			highlight: "yellowgreen",
			label: "ETFs"
		}	
	];
	var chart = new Chart(ctx).Doughnut(data);
});