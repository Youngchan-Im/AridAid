import type { Metadata } from "next";

import { Providers } from "@/providers";
import { fonts } from "@/fonts";
import { Flex } from "@chakra-ui/react";

// set-up metadata
export const metadata: Metadata = {
  title: "Dashboard of Desertification in China",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={fonts.inter.className}
        style={{ backgroundColor: "#EBEBEB" }}
      >
        <Providers>
          <Flex
            as={"main"}
            flexDir={"column"}
            align={"center"}
            rowGap={"60px"}
            py={"50px"}
            w="full"
            h={"full"}
            minH={"100dvh"}
            // overflowX={"hidden"}
          >
            <Flex
              maxW={{ base: "100%", md: "1250px" }}
              w={{ base: "100%", md: "1250px" }}
              px={{ base: "16px", md: "0px" }}
            >
              {children}
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
