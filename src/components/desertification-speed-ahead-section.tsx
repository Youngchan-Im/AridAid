import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import BarChart from "./charts/bar-chart";

export default function DesertificationSpeedAheadSection() {
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
      w={"100%"}
      minH={"443px"}
      h={"auto"}
      border={"1px solid #EBEBEB"}
      boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}
    >
      <Flex justify={"space-between"} flex={1} maxH={"60px"} h={"100%"}>
        <Flex flexDir={"column"} rowGap={"4px"}>
          <Text
            color={"#000"}
            fontSize={"24px"}
            fontWeight={600}
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
          placeholder="Select Year"
          defaultValue={selectOptions[0]}
          maxW={"120px"}
          bgColor={"#EBEBEB"}
          _focusVisible={{ outline: "none" }}
          fontSize={"16px"}
          fontWeight={500}
          lineHeight={"1.6"}
          letterSpacing={"-0.32px"}
        >
          {selectOptions.map((option) => {
            return (
              <option key={`year-${option}`} value={option}>
                {option}
              </option>
            );
          })}
        </Select>
      </Flex>
      <Flex w={"100%"} maxH={"285px"} h={"100%"}>
        <BarChart />
      </Flex>
    </Flex>
  );
}

const selectOptions = [
  "1year",
  "2years",
  "3years",
  "4years",
  "5years",
  "10years",
];
