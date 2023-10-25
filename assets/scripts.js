window.Apex = {
  chart: {
    foreColor: "#ccc",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    theme: "dark",
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var optionsLine = {
  chart: {
    height: 328,
    type: "line",
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [
    {
      name: "Music",
      data: [1, 15, 26, 20, 33, 27],
    },
    {
      name: "Photos",
      data: [3, 33, 21, 42, 19, 32],
    },
    {
      name: "Files",
      data: [0, 39, 52, 11, 29, 43],
    },
  ],
  title: {
    text: "Media",
    align: "left",
    offsetY: 25,
    offsetX: 20,
  },
  subtitle: {
    text: "Statistics",
    offsetY: 55,
    offsetX: 20,
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: [
    "01/15/2002",
    "01/16/2002",
    "01/17/2002",
    "01/18/2002",
    "01/19/2002",
    "01/20/2002",
  ],
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetY: -20,
  },
};

var chartLine = new ApexCharts(
  document.querySelector("#line-adwords"),
  optionsLine
);
chartLine.render();

var optionsCircle4 = {
  chart: {
    type: "radialBar",
    height: 350,
    width: 380,
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: "48%",
        background: "transparent",
      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180,
    },
  },
  stroke: {
    lineCap: "round",
  },
  series: [78, 92, 100, 91],
  labels: ["Request-html", "Pytube", "Scrap", "Grab"],
  legend: {
    show: true,
    floating: true,
    position: "right",
    offsetX: -80,
    offsetY: 120,
  },
};

var chartCircle4 = new ApexCharts(
  document.querySelector("#radialBarBottom"),
  optionsCircle4
);
chartCircle4.render();

var optionsCircle5 = {
  chart: {
    type: "radialBar",
    height: 350,
    width: 380,
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: "48%",
        background: "transparent",
      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180,
    },
  },
  stroke: {
    lineCap: "round",
  },
  series: [71, 72, 1, 1],
  labels: ["Request-html", "Pytube", "Scrap", "Grab"],
  legend: {
    show: true,
    floating: true,
    position: "right",
    offsetX: -80,
    offsetY: 120,
  },
};

var chartCircle5 = new ApexCharts(
  document.querySelector("#radialBarBottom2"),
  optionsCircle5
);
chartCircle5.render();

var optionsBar = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  series: [
    {
      name: "Request-HTML",
      data: [8, 9, 10, 9, 10, 7],
    },
    {
      name: "Pytube",
      data: [7, 8, 8, 8, 7, 6],
    },
    {
      name: "Grab",
      data: [6, 8, 9, 7, 9, 7],
    },
    {
      name: "Scrab",
      data: [8, 10, 9, 9, 9, 8],
    },
  ],
  xaxis: {
    categories: [
      "Completeness",
      "Clarity",
      "Accuracy",
      "Consistency",
      "Integrity",
      "Keyword Completeness",
    ],
  },
  fill: {
    opacity: 1,
  },
};
var chartBar = new ApexCharts(document.querySelector("#barchart"), optionsBar);

chartBar.render();

var optionsBar2 = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  series: [
    {
      name: "Request-HTML",
      data: [0],
    },
    {
      name: "Pytube",
      data: [116.8],
    },
    {
      name: "Grab",
      data: [195],
    },
    {
      name: "Scrab",
      data: [1000],
    },
  ],
  xaxis: {
    categories: ["Activeness Score"],
  },
  fill: {
    opacity: 1,
  },
};
var chartBar = new ApexCharts(
  document.querySelector("#barchart2"),
  optionsBar2
);

chartBar.render();
