import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function CurrentSection() {
  return (
    <Flex
      as={"section"}
      flexDir={"column"}
      px={{ base: "25px", md: "45px" }}
      py={{ base: "20px", md: "35px" }}
      borderRadius={{ base: "20px", md: "40px" }}
      bg={`lightgray -8.69px -385.902px / 103.231% 430.131%, #F0F8FF`}
      bgImage={"/assets/desert.png"}
      bgPos={"bottom"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      w={"100%"}
      minH={"320px"}
      h={"auto"}
      rowGap={"10px"}
      border={"1px solid #EBEBEB"}
      boxShadow={"0px 0px 10px 0px rgba(83, 74, 74, 0.08)"}
    >
      <Flex flexDir={"column"} rowGap={"32px"}>
        <Flex flexDir={"column"} rowGap={"4px"}>
          <Text
            color={"#000"}
            fontSize={"24px"}
            fontWeight={900}
            lineHeight={"1.4"}
          >
            Current Analysis of Desertification in China (updated 2026)
          </Text>
          <Text
            color={"#7B7B7B"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"1.4"}
          >
            This is the latest analysis of desertification in China.
          </Text>
        </Flex>
        {/* data */}
        <Flex flex={1} gap={"24px"} flexWrap={"wrap"}>
          {/* data 1 */}
          <Flex
            rowGap={"4px"}
            flexDir={"column"}
            flex={1}
            borderRadius={{ base: "15px", md: "30px" }}
            bgColor={"rgba(255, 255, 255, 0.40)"}
            boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.04)"}
            backdropFilter={"blur(5px)"}
            px={"24px"}
            py={"30px"}
            minW={"260px"}
          >
            <Flex columnGap={"6px"} align={"center"} h={"50px"}>
              <Text
                color={"#000"}
                fontSize={"36px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                2.9
              </Text>
              <Text
                color={"#000"}
                fontSize={"19px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                times/year
              </Text>
            </Flex>
            <Text color={"#7B7B7B"} fontSize={"14px"} lineHeight={"1.4"}>
              Dust Storm Frequency Increase
            </Text>
            <Text>(Average)</Text>
          </Flex>
          {/* data 2 */}
          <Flex
            rowGap={"4px"}
            flexDir={"column"}
            flex={1}
            borderRadius={{ base: "15px", md: "30px" }}
            bgColor={"rgba(255, 255, 255, 0.40)"}
            boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.04)"}
            backdropFilter={"blur(5px)"}
            px={"24px"}
            py={"30px"}
            minW={"260px"}
          >
            <Flex columnGap={"6px"} align={"center"} h={"50px"}>
              <Text
                color={"#000"}
                fontSize={"36px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                327
              </Text>
              <Text
                color={"#000"}
                fontSize={"19px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                km²/year
              </Text>
            </Flex>
            <Text color={"#7B7B7B"} fontSize={"14px"} lineHeight={"1.4"}>
              Desertification Speed
            </Text>
            <Text>(Average)</Text>
          </Flex>
          {/* data 3 */}
          <Flex
            rowGap={"4px"}
            flexDir={"column"}
            flex={1}
            borderRadius={{ base: "15px", md: "30px" }}
            bgColor={"rgba(255, 255, 255, 0.40)"}
            boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.04)"}
            backdropFilter={"blur(5px)"}
            px={"24px"}
            py={"30px"}
            minW={"260px"}
          >
            <Flex columnGap={"6px"} align={"center"} h={"50px"}>
              <Text
                color={"#000"}
                fontSize={"36px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                2.19
              </Text>
              <Text
                color={"#000"}
                fontSize={"19px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                mm/year
              </Text>
            </Flex>
            <Text color={"#7B7B7B"} fontSize={"14px"} lineHeight={"1.4"}>
              Precipitation Change
            </Text>
            <Text>(Average)</Text>
          </Flex>
          {/* data 4 */}
          <Flex
            rowGap={"4px"}
            flexDir={"column"}
            flex={1}
            borderRadius={{ base: "15px", md: "30px" }}
            bgColor={"rgba(255, 255, 255, 0.40)"}
            boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.04)"}
            backdropFilter={"blur(5px)"}
            px={"24px"}
            py={"30px"}
            minW={"260px"}
          >
            <Flex columnGap={"6px"} align={"center"} h={"50px"}>
              <Text
                color={"#000"}
                fontSize={"36px"}
                fontWeight={"600"}
                lineHeight={"1.4"}
                letterSpacing={"-0.72px"}
              >
                Increase
              </Text>
            </Flex>
            <Text color={"#7B7B7B"} fontSize={"14px"} lineHeight={"1.4"}>
              Rate of Dust Quantity Change
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
