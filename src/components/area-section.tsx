import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function AreaSection() {
  return (
    <Flex
      as={"section"}
      flexDir={"column"}
      justify={"space-between"}
      rowGap={"10px"}
      px={{ base: "25px", md: "35px" }}
      py={{ base: "20px", md: "35px" }}
      borderRadius={{ base: "20px", md: "40px" }}
      bg={`lightgray -8.69px -385.902px / 103.231% 430.131%, #F0F8FF`}
      bgImage={"/assets/map.png"}
      bgPos={{ base: "right", sm: "center", md: "bottom right" }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      maxW={{ base: "100%", md: "401px" }}
      minH={{ base: "350px", sm: "200px", md: "443px" }}
      h={"auto"}
      border={"1px solid #EBEBEB"}
      boxShadow={"0px 0px 10px 0px rgba(46, 41, 41, 0.08)"}
    >
      <Text
        color={"#000"}
        fontSize={"24px"}
        fontWeight={900}
        lineHeight={"1.4"}
      >{`China's Desertification Prediction Analysis Area`}</Text>
      <Flex flexDir={"column"}>
        <Text
          color={"#000"}
          fontSize={"24px"}
          fontWeight={600}
          lineHeight={"1.4"}
        >{`10 Area`}</Text>
        <Text
          color={"#7B7B7B"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"1.4"}
        >
          Total target area
        </Text>
      </Flex>
    </Flex>
  );
}
