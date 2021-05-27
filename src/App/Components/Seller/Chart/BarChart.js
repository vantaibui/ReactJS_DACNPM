import React from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.plugins.tooltip.enabled = false;

const BarChart = (props) => {
  let { statistics } = props;
  console.log(statistics);

  let renderDate = (dates) => {
    return dates.map((item) => {
      return "Ngày " + item.date;
    });
  };

  let renderRevenue = (list) => {
    return list.map((item) => {
      return item.total;
    });
  };

  let chartData = {
    labels: renderDate(statistics),
    datasets: [
      {
        data: renderRevenue(statistics),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-statistics bar-chart">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Thống kê doanh thu",
              padding: {
                top: 10,
                bottom: 30,
              },
              position: "bottom",
              font: {
                size: "18px",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
