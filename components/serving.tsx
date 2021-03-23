import React from "react";
import Image from "next/image";
import { Box, Flex, Stack, Text, Spacer } from "@chakra-ui/react";

interface ServingProps {
  dark?: boolean;
  title?: string;
}

const Avocado: React.FC = () => (
  <Box as={Flex} alignItems="center" marginRight="-38px" zIndex="99">
    <Image
      src="/apple-touch-icon.png"
      alt="Picture of chef"
      width={80}
      height={80}
    />
  </Box>
);

function Serving({ dark, title }: ServingProps) {
  return (
    <Flex padding="10">
      <Avocado />
      <Box
        bg={dark ? "brandHero.100" : "whiteAlpha.600"}
        fontSize="medium"
        borderRadius="xl"
        padding="2"
        paddingX="12"
        width="18rem"
        zIndex="1"
      >
        <Stack direction="column">
          <Text
            textAlign="center"
            color={dark ? "#f7f5f5" : "brandHero.100"}
            fontWeight="bold"
          >
            Avocado Salad
          </Text>
          <Stack direction="row" justifyContent="center">
            <Box>
              <Text color={dark ? "#ebe1e1" : "brandHero.100"} fontSize="sm">
                Serving
              </Text>
              <Text
                color={dark ? "#f7f5f5" : "brandHero.100"}
                fontWeight="bold"
              >
                2 persons
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text color={dark ? "#ebe1e1" : "brandHero.100"} fontSize="sm">
                Cook Time
              </Text>
              <Text
                color={dark ? "#f7f5f5" : "brandHero.100"}
                fontWeight="bold"
              >
                1h 30m
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Serving;
