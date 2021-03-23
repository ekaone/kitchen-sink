import React from "react";
import { Box, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
// components
import Menus from "./menu-navigation";
import ServingMain from "./serving-main";
import Serving from "./serving";

function SectionMenu() {
  return (
    <SimpleGrid columns={[1, 1, 3]} spacing={2} paddingY="8" paddingX="7">
      <Box
        as={Flex}
        alignItems="center"
        justifyContent="flex-start"
        display={{ base: "none", md: "none", lg: "grid" }}
      >
        <Menus />
      </Box>
      <Box as={Flex} alignItems="center" justifyContent="center">
        <ServingMain />
      </Box>
      <Box as={Flex} alignItems="center" justifyContent="flex-end">
        <VStack>
          <Serving />
          <Serving dark />
        </VStack>
      </Box>
    </SimpleGrid>
  );
}

export default SectionMenu;
