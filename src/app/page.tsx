import AreaSection from "@/components/area-section";
import CurrentSection from "@/components/current-section";
import DesertificationSpeedAheadSection from "@/components/desertification-speed-ahead-section";
import DustStormFrequencySection from "@/components/dust-storm-frequency-section";
import Header from "@/components/header";
import NextPredictionSection from "@/components/next-prediction-section";

import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir={"column"} flex={1} gap={"24px"} pb={"30px"}>
      <Header />
      <Flex flexDir={"column"} gap={"24px"}>
        <CurrentSection />
        <Flex flexDir={{ base: "column", sm: "row" }} gap={"24px"}>
          <AreaSection />
          <NextPredictionSection />
        </Flex>
        <Flex flexDir={{ base: "column", md: "row" }} gap={"24px"}>
          <DesertificationSpeedAheadSection />
          <DustStormFrequencySection />
        </Flex>
      </Flex>
    </Flex>
  );
}
