import React from "react";
import { Box } from "@chakra-ui/react";

function Container({ children }: { children: React.ReactNode }) {
  return <Box padding="20px">{children}</Box>;
}

export default Container;
