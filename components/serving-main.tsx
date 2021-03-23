import React from "react";
import Image from "next/image";
import { Box, SimpleGrid, Flex, Spacer, Text, Stack } from "@chakra-ui/react";

function ServingMain() {
  return (
    <Box
      bg="whiteAlpha.700"
      fontSize="medium"
      borderRadius="xl"
      padding="2"
      width="25rem"
      boxShadow="lg"
    >
      <SimpleGrid columns={2} spacing={2}>
        <Box as={Flex} justifyContent="center" alignItems="center">
          <Image
            src="/apple-touch-icon.png"
            alt="Picture of chef"
            width={150}
            height={150}
          />
        </Box>
        <Box height="10rem">
          <Stack direction="column">
            <Text color="brandHero.100" fontWeight="bold">
              Avocado Salad
            </Text>
            <Text color="brandHero.100" fontSize="sm">
              Avocado Salad is the best dessert, buy one get two
            </Text>
            <Stack direction="row" position="absolute" bottom="3">
              <Box>
                <Text color="brandHero.100" fontSize="sm">
                  Serving
                </Text>
                <Text color="brandHero.100" fontWeight="bold">
                  2 persons
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text color="brandHero.100" fontSize="sm">
                  Cook Time
                </Text>
                <Text color="brandHero.100" fontWeight="bold">
                  1h 30m
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ServingMain;