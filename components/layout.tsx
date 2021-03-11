import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type PropsType = {
  children: ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <div>
      <Box
        width="100%"
        height="100%"
        border="2px"
        borderColor={["red.200", "green.200", "blue.500"]}
        p="1.5"
      >
        <Box>{children}</Box>
      </Box>
    </div>
  );
}

export default Layout;
