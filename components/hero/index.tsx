import React from "react";
import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
// components
import HeadingText from "./heading";
import Cooking from "./cooking";
import Navbar from "../nav-bar";

function Hero() {
  return (
    <Box
      width="full"
      // bg="#febd2e"
      backgroundImage="url('/assets/blob-scatter-haikei.svg')"
      backgroundPosition="center"
      maxHeight="600px"
      borderRadius="20px"
      padding="1rem"
    >
      <Box>
        <Navbar />
      </Box>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <Box>
          <HeadingText />
        </Box>
        <Box as={Flex} alignItems="center" justifyContent="center">
          <Cooking />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Hero;
