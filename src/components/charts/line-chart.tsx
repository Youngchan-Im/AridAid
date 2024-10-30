"use client";

import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);
  const labels = ["1", "2", "3", "4", "5", " 10"];
  const data = [0, -1.0, -2.0, -3.0, -4.0, -5.0];

  const chartData = {
    labels,
    datasets: [
      {
        label: "(mm)",
        data,
        borderColor: "black",
        // backgroundColor에 그라데이션 설정
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          // 아래로 채워질 그라데이션 생성
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(255, 255, 255, 0)"); // 위쪽 투명
          gradient.addColorStop(1, "rgba(128, 128, 128, 0.3)"); // 아래쪽 회색 음영

          return gradient;
        },
        fill: true, // fill을 true로 설정하여 배경색으로 채우기
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  } as ChartData<"line", number[], string>;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        // display: false,
        offset: false, // x축 양끝에 offset을 준다
      },
      y: {
        beginAtZero: false,
        ticks: {
          maxTicksLimit: 5, // y축 라벨 개수 제한
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return tickValue.toFixed(3);
            }
            return tickValue;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return <Line ref={chartRef} data={chartData} options={options} />;
};

export default LineChart;
