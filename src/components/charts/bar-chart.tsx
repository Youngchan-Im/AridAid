"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const labels = [
    "Otindag",
    "Horqin",
    "Hulunbuir",
    "Mu Us",
    "Badain",
    "Tengger",
    "Kubuqi",
    "Alxa",
    "Gobi",
    "Bayankhongor",
  ];
  const data = [300, 500, 450, 600, 550, 700, 800, 650, 600, 750]; // 데이터 값
  const backgroundData = Array(data.length).fill(800); // 최대값으로 배경을 설정

  const chartData = {
    labels,
    datasets: [
      {
        label: "Background",
        data: backgroundData,
        backgroundColor: "#5B5B5B", // 연한 회색 배경
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
