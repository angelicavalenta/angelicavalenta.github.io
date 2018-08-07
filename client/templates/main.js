import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Chart from 'chart.js';

import './chart.html';


Template.Chart.onRendered(function() {

  var ctx = document.getElementById("myChart");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star", "No Rating"],
      datasets: [{
        label: 'Chicago',
        data: [2.08, 1.68, 0.80, 1.29, 0.76, 1.82],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }, {
        label: 'Phoenix',
        data: [4.46, 3.11, 3.36, 3.69, 3.27, 3.43],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
      },
      {
        label: 'San Antonio',
        data: [4.25, 3.87, 3.45, 3.02, 4.28, 4.87],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',

        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Average KM traveled per order"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });



  var ctx = document.getElementById("myChart2");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star", "No Rating"],
      datasets: [{
        label: 'Chicago',
        data: [39.15, 36.57, 28.85, 18.06, 23.48, 72.39],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }, {
        label: 'Phoenix',
        data: [38.19, 35.70, 40.55, 40.46, 35.88, 42.17],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
      },
      {
        label: 'San Antonio',
        data: [36.05, 41.05, 52.21, 54.83, 33.74, 38.63],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',

        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Average Time traveled per order"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  var ctx = document.getElementById("myChart3");
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["Mon", "Tues", "Wedn", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [{
        label: 'Chicago',
        data: [4822,3126,3556,4741,5296,4401,4809],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(40, 170, 64, 0.2)'

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(40, 170, 64, 1)'

        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Orders placed by day of week"
      }
    }
  });


  var ctx = document.getElementById("myChart4");
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      datasets: [{
        label: 'Chicago',
        data: [0,300,222,	129,	49,	16,	14,	27,	90,	245,	398,	611,	1575,1596,	1425,	1136,	1175,	1412,	2000,	2600,	2708,	2296,	1484,	784,	550],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      },
      {
        label: 'Phoenix',
        data: [0,88,	67,	29,	14,	5,	8,	4,	17,	66,	99,	194,496, 538,	479,	447,	432,	475,	598,	684,	709,	565,	327,	190,	135],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
      },
      {
        label: 'San Antonio',
        data: [0,3,	1,	2,	0,	0,	1,	2,	4,	18,	15,	20,	146, 155,	109,	97,	76,	94,	97,	107,	111,	77,	60,	40,	8],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',

        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Number of orders by time of day"
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          }
        }]
      }
    }
  })




  var ctx = document.getElementById("myChart5");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star", "No Rating"],
      datasets: [{
        data: [19257,1857,464,180,237,847],
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
      title: {
        display: true,
        text: "Customer Ratings - Chicago"
      }

      // legend: false,
    }
  });

  var ctx = document.getElementById("myChart6");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star", "No Rating"],
      datasets: [{
        data: [5717,494,53,27,41,334],
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
      title: {
        display: true,
        text: "Customer Ratings - Phoenix"
      }

      // legend: false,
    }
  });

  var ctx = document.getElementById("myChart7");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star", "No Rating"],
      datasets: [{
        data: [1082,75,19,11,9,47],
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
      title: {
        display: true,
        text: "Customer Ratings - San Antonio"
      }

      // legend: false,
    }
  });


  var ctx = document.getElementById("myChart8");
  var myBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Chicago',
        data: [
          {x:1, y:7,r:54.3891639677041},
          {x:2, y:2,r:35.5784155654898},
          {x:3, y:4,r:27.814677479646},
          {x:4, y:1,r:22.9551741932687},
          {x:5, y:5,r:19.5795566380313},
          {x:6, y:3,r:17.1859629479473},
          {x:7, y:2,r:15.5774823055533},
          {x:8, y:1,r:14.5464227575196},
          {x:9, y:4,r:12.184644301337},
          {x:10, y:1,r:10.7491436130478},
          {x:11, y:4,r:11.1975334704517},
          {x:12, y:7,r:8.88748820522211},
          {x:13, y:5,r:7.71384477197471},
          {x:14, y:6,r:8.88748820522211},
          {x:15, y:2,r:9.10976691562699},
          {x:16, y:1,r:6.24025146915571},
          {x:17, y:4,r:6.46330407009565},
          {x:18, y:8,r:5.73879354831717},
          {x:19, y:3,r:6.86828545531999},
          {x:20, y:1,r:6.24025146915571},
          {x:21, y:5,r:4.7622031559046},
          {x:22, y:6,r:4.7622031559046},
          {x:23, y:4,r:4.7622031559046},
          {x:24, y:3,r:4.7622031559046},
          {x:25, y:5,r:4.32674871092222},
          {x:26, y:2,r:4.7622031559046},
          {x:27, y:1,r:3},
          {x:29, y:3,r:3.77976314968462},
          {x:30, y:1,r:3},
          {x:31, y:4,r:4.7622031559046},
          {x:32, y:2,r:3.77976314968462},
          {x:33, y:1,r:3},
          {x:35, y:2,r:3},
          {x:40, y:4,r:3},
          {x:41, y:1,r:3},
          {x:46, y:4,r:3},
          {x:50, y:5,r:3},
          {x:67, y:1,r:3},
          {x:-1, y:6,r:3}
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Phoenix',
        data: [
          {x:1, y:2,r:36.8213939085644},
          {x:2, y:5,r:24.0778720576673},
          {x:3, y:2,r:19.7194153543273},
          {x:4, y:7,r:15.4276895439494},
          {x:5, y:3,r:13.0862120143645},
          {x:6, y:5,r:12.4224532482686},
          {x:7, y:6,r:9.90578174668388},
          {x:8, y:2,r:8.14325284978472},
          {x:9, y:4,r:6.46330407009565},
          {x:10, y:7,r:7.23042679252569},
          {x:11, y:5,r:7.05400406316227},
          {x:12, y:2,r:6},
          {x:13, y:5,r:5.73879354831717},
          {x:14, y:1,r:5.12992784003009},
          {x:15, y:3,r:5.73879354831717},
          {x:16, y:6,r:4.32674871092222},
          {x:17, y:2,r:5.12992784003009},
          {x:19, y:4,r:5.12992784003009},
          {x:21, y:3,r:3.77976314968462},
          {x:23, y:5,r:3},
          {x:24, y:3,r:3},
          {x:29, y:4,r:3},
          {x:53, y:6,r:3},
          {x:-1, y:6,r:3}
        ],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'San Antonio',
        data: [
          {x:1, y:3,r:21.1820900119564},
          {x:2, y:6,r:15.2362592343981},
          {x:3, y:4,r:11.9371716236892},
          {x:4, y:2,r:9.10976691562699},
          {x:5, y:4,r:7.55952629936924},
          {x:6, y:1,r:6.46330407009565},
          {x:7, y:6,r:5.12992784003009},
          {x:8, y:2,r:5.45136177849642},
          {x:9, y:5,r:4.32674871092222},
          {x:10, y:3,r:3},
          {x:11, y:7,r:3},
          {x:13, y:1,r:3},
          {x:14, y:4,r:3.77976314968462},
          {x:16, y:6,r:3},
          {x:-1, y:6,r:3} //dummy delete this later
        ],
        backgroundColor:'rgba(75, 192, 192, 0.2)',
        borderColor:'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Customer loyalty"
      },
      scales:
      {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
      },
      tooltips: {
        callbacks: {
          title: function() {
            return '';
          },
          label: function(item, data) {
            var datasetLabel=data.datasets[item.datasetIndex].label||'';
            var dataPointR = data.datasets[item.datasetIndex].data[item.index].r;
            var dataPointValue = Math.floor(Math.pow(dataPointR/3,3))
            if(dataPointValue>1) {
              var customer = " customers"
            } else {
              var customer = " customer"
            }
            if(item.xLabel>1) {
              var time = " times"
            } else {
              var time = " time"
            }
            return datasetLabel + ': '+ dataPointValue + customer + ' ordered ' + item.xLabel + time;
          }
        }
      }

    }
  });



  var ctx = document.getElementById("myChart9");
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Chicago", "Phoenix", "San Antonio"],
      datasets: [{
        label: 'Chicago',
        data: [9941,3079,620],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Number of unique customers"
      }
    }
  });
  
  var ctx = document.getElementById("myChart10");
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Customer price", "Courier price", "Purchase fee", "Purchase price", "Puchase tip"],
      datasets: [{
        label: 'Chicago',
        data: [173212, 138569,43423,483869,74551],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(40, 170, 64, 0.2)'

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(40, 170, 64, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'Phoenix',
        data: [53435,42756,8814,98183,17615],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(40, 170, 64, 0.2)'

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(40, 170, 64, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'San Antonio',
        data: [11133,8985,891,9949,2598],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(40, 170, 64, 0.2)'

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(40, 170, 64, 1)'

        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Accounts receivable and payable for orders"
      }
    }
  });


});
