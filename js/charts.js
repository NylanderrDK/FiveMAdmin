// Line Chart
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun"],
    datasets: [{
      data: [2, 34, 22, 16, 1, 27],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Pie Chart
var ctxP = document.getElementById("pieChart").getContext("2d");
var myPieChart = new Chart(ctxP, {
  type: "pie",
  data: {
    labels: ["Politi", "EMS", "Journalist", "Advokat"],
    datasets: [{
      data: [34, 20, 6, 10],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
    }]
  },
  options: {
    responsive: true,
    legend: false
  }
});