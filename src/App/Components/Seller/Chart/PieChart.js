import React from "react";
import { Pie, defaults } from "react-chartjs-2";

const PieChart = () => {
  let chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "Bar chart",
        data: [12, 19, 3, 5, 2, 3, 1, 5],
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
    <div className="chart-statistics">
      <Pie
        data={chartData}
        options={{
          maintainAspectRatio: true,
          plugins: {
            tooltip: {
              enabled: true,
            },
            legend: {
              labels: {
                font: {
                  size: 16,
                },
              },
              position: "bottom",
              align: "center",
            },
            layout: {
              padding: 20,
            },
          },
          animations: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
