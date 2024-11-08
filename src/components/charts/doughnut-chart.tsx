"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AspectRatio, Center } from "@chakra-ui/react";
import { DETAILED_DESERTIFICATION_DATA } from "@/constants/detailed-desertification-data";
import { SelectOptionType } from "@/constants/future-desertification-predictions-data";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const top5DustStormFrequency = Object.entries(DETAILED_DESERTIFICATION_DATA)
    .sort(
      ([, a], [, b]) =>
        b.DUST_STORM_FREQUENCY_INCREASE - a.DUST_STORM_FREQUENCY_INCREASE
    )
    .slice(0, 5)
    .reduce((acc: { [key: string]: number }, [key, value]) => {
      acc[key] = value.DUST_STORM_FREQUENCY_INCREASE;
      return acc;
    }, {});

  const labels = Object.keys(top5DustStormFrequency);
  const data = Object.values(top5DustStormFrequency);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Frequency",
        data,
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
