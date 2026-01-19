import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex
      px={"42px"}
      py={"16px"}
      w={"100%"}
      h={{ base: "auto", sm: "50px" }}
      borderRadius={{ base: "25px", sm: "128px" }}
      bgColor={"rgba(170, 170, 170, 0.12)"}
      backdropFilter={"blur(25px)"}
      align={"center"}
      justify={"space-between"}
      flexDir={{ base: "column", sm: "row" }}
      rowGap={"10px"}
    >
      <Text
        color={"#000"}
        fontWeight={800}
        lineHeight={"1.4"}
        letterSpacing={"-0.16px"}
        textAlign={"center"}
      >
        Dashboard of Desertification in China
      </Text>
      <Text
        color={"#7B7B7B"}
        fontSize={"12px"}
        fontWeight={500}
        lineHeight={"24px"}
        textTransform={"uppercase"}
      >
        2026.02.05
      </Text>
    </Flex>
  );
}
