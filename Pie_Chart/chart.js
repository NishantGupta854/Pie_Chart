 // Load google charts
 var gold = Math.ceil((10 + (Math.random() * ((5) + 1)))/10);
var debt = Math.ceil((10 + (Math.random() * ((10) + 1)))/10);
var mf = Math.ceil((20 + (Math.random() * ((10 - 5) + 1)))/10);
var crypto = Math.ceil((5 +(Math.random() * ((10 - 5) + 1)))/10);
var equity  =20-gold-debt-mf;

 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 // Draw the chart and set the chart values
 function drawChart() {

 
   
   var data = google.visualization.arrayToDataTable([
   ['Asset', 'Percentage Allocation'],
   ['Gold', gold],
   ['Debt', debt],
   ['Mutual Funds', mf],
   ['Equity', equity],
     ]);
 
   // Optional; add a title and set the width and height of the chart
   var options = {'title':'Your Risk Profile:', 'width':550, 'height':400};
 
   // Display the chart inside the <div> element with id="piechart"
   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
   chart.draw(data, options);
 }