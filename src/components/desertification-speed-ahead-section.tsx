"use client";

import { Flex, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BarChart from "./charts/bar-chart";
import {
  DataByYearType,
  FUTURE_DESERTIFICATION_PREDICTIONS_BY_YEAR,
} from "@/constants/future-desertification-predictions-data";

export default function DesertificationSpeedAheadSection() {
  const [option, setOption] = useState<number>(1);
  return (
    <Flex
      as={"section"}
      flexDir={"column"}
      rowGap={"10px"}
      justify={"space-between"}
      px={{ base: "25px", md: "35px" }}
      py={{ base: "20px", md: "35px" }}
      borderRadius={{ base: "20px", md: "40px" }}
      bgColor={"#F6F6F6"}
      flex={1}
      minH={"443px"}
      h={"auto"}
      border={"1px solid #EBEBEB"}
      boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        rowGap={{ base: "16px", md: "0px" }}
        justify={"space-between"}
        flex={1}
        maxH={{ base: "auto", md: "60px" }}
        h={"100%"}
      >
        <Flex flexDir={"column"} rowGap={"4px"}>
          <Text
            color={"#000"}
            fontSize={"24px"}
            fontWeight={900}
            lineHeight={"1.4"}
          >
            {`Desertification Speed Ahead`}
          </Text>
          <Text
            color={"#7B7B7B"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"1.4"}
          >
            {`You can check the rate of desertification by year.`}
          </Text>
        </Flex>
        <Select
          alignSelf={"flex-end"}
          defaultValue={selectOptions[0]}
          maxW={"120px"}
          bgColor={"#EBEBEB"}
          _focusVisible={{ outline: "none" }}
          fontSize={"16px"}
          fontWeight={500}
          lineHeight={"1.6"}
          letterSpacing={"-0.32px"}
          onChange={(e) => {
            setOption(Number(e.target.value));
          }}
        >
          {selectOptions.map((opt) => {
            return (
              <option key={`year-${opt}`} value={opt}>
                {`${opt} Year${opt === 1 ? "" : "s"}`}
              </option>
            );
          })}
        </Select>
      </Flex>
      <Flex w={"100%"} maxH={"285px"} h={"100%"}>
        <BarChart
          data={
            FUTURE_DESERTIFICATION_PREDICTIONS_BY_YEAR[
              `${option}` as keyof DataByYearType
            ]
          }
        />
      </Flex>
    </Flex>
  );
}

const selectOptions = [1, 2, 3, 4, 5, 10];
