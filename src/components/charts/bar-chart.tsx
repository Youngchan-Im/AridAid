"use client";

import React, { useMemo } from "react";
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
import { ValueByYearType } from "@/constants/future-desertification-predictions-data";
import { AspectRatio, useBreakpointValue } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }: { data: ValueByYearType }) => {
  const isBase = useBreakpointValue({ base: true, sm: false });
  const x = useMemo(() => Object.keys(data), [data]); // year
  const y = useMemo(
    () => Object.values(data).map((v) => v.desertificationSpeed),
    [data]
  );

  const chartData = {
    labels: x,
    datasets: [
      {
        label: "region",
        data: y,
        backgroundColor: "#5B5B5B",
        barPercentage: 1,
        categoryPercentage: 1,
        borderColor: "transparent",
        borderRadius: 25,
        borderSkipped: false,
        categorySpacing: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    maxBarThickness: isBase ? 20 : 40,
    scales: {
      x: {
        grid: {
          color: "transparent",
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
      <Bar data={chartData} options={options} />
    </AspectRatio>
  );
};

export default BarChart;
