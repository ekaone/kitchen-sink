import React from "react";
import { Box } from "@chakra-ui/react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <Box paddingY="2rem" paddingX="5rem">
      {children}
    </Box>
  );
}

export default Container;
