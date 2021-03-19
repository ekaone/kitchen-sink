import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Container from "./container";

type PropsType = {
  children: ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <Container>
      <Box
        width="100%"
        height="100%"
        borderWidth="5px"
        borderRadius="3xl"
        borderColor="#ffffff"
      >
        <Box>{children}</Box>
      </Box>
    </Container>
  );
}

export default Layout;
