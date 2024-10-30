import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import DoughnutChart from "./charts/doughnut-chart";

export default function DustStormFrequencySection() {
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
      maxW={"401px"}
      w={"100%"}
      minH={"443px"}
      h={"auto"}
      border={"1px solid #EBEBEB"}
      boxShadow={"0px 0px 10px 0px rgba(19, 16, 16, 0.08)"}
    >
      <Text
        color={"#000"}
        fontSize={"24px"}
        fontWeight={600}
        lineHeight={1.4}
        whiteSpace={"pre-line"}
      >
        {`Dust Storm\nFrequency TOP5`}
      </Text>
      <DoughnutChart />
    </Flex>
  );
}
