import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex
      px={"42px"}
      w={"100%"}
      h={"50px"}
      borderRadius={"128px"}
      bgColor={"rgba(170, 170, 170, 0.12)"}
      backdropFilter={"blur(25px)"}
      align={"center"}
      justify={"space-between"}
    >
      <Text
        color={"#000"}
        fontSize={"16px"}
        fontWeight={600}
        lineHeight={"1.4"}
        letterSpacing={"-0.16px"}
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
        2024.10.26
      </Text>
    </Flex>
  );
}
