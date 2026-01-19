import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import DoughnutChart from "./charts/doughnut-chart";

export default function DustStormFrequencySection() {
  return (
    <Flex
      as={"section"}
      flexDir={"column"}
      rowGap={{ base: "16px", md: "10px" }}
      justify={"space-between"}
      px={{ base: "25px", md: "35px" }}
      py={{ base: "20px", md: "35px" }}
      borderRadius={{ base: "20px", md: "40px" }}
      bgColor={"#F6F6F6"}
      maxW={{ base: "100%", md: "401px" }}
      flex={1}
      minH={{ base: "auto", md: "443px" }}
      h={"auto"}
      border={"1px solid #EBEBEB"}
      boxShadow={"0px 0px 10px 0px rgba(19, 16, 16, 0.08)"}
    >
      <Text
        color={"#000"}
        fontSize={"24px"}
        fontWeight={900}
        lineHeight={1.4}
        whiteSpace={"pre-line"}
      >
        {`Dust Storm\nFrequency TOP5`}
      </Text>
      <Center>
        <DoughnutChart />
      </Center>
    </Flex>
  );
}
