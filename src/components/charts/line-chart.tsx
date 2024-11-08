"use client";

import React, { useMemo, useRef } from "react";
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
import { ValueType } from "@/constants/future-desertification-predictions-data";
import { AspectRatio } from "@chakra-ui/react";

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

const LineChart = ({ data }: { data: ValueType[] }) => {
  const x = useMemo(() => data?.map((v) => `${v.yearsAhead}`), [data]); // years
  const y = useMemo(() => data?.map((v) => v.precipitationChange), [data]); // data

  const chartData = {
    labels: x,
    datasets: [
      {
        label: "(mm)",
        data: y,
        borderColor: "black",
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
          gradient.addColorStop(1, "rgba(128, 128, 128, 0.3)");

          return gradient;
        },
        fill: true,
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
        offset: false,
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

  return (
    <AspectRatio ratio={3 / 1} maxW={"100%"} w={"100%"}>
      <Line data={chartData} options={options} />
    </AspectRatio>
  );
};

export default LineChart;
