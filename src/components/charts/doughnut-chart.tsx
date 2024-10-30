"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AspectRatio, Center } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const chartData = {
    labels: ["Otindag", "Horqin", "Hulunbuir", "Mu Us", "Badain"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["#000", "#5B5B5B", "#A0A0A0", "#DEDEDE", "#E8E8E8"],
        borderColor: ["#000", "#5B5B5B", "#A0A0A0", "#DEDEDE", "#E8E8E8"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    devicePixelRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <AspectRatio ratio={335 / 281} maxW={"335px"} w={"100%"}>
      <Center w={"100%"}>
        <Doughnut data={chartData} options={options} />
      </Center>
    </AspectRatio>
  );
}

export default DoughnutChart;
