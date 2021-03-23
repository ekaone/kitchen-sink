import Head from "next/head";
import { Box } from "@chakra-ui/react";

// components
import { Layout, Hero, Serving, Menus } from "../components";

export default function Home() {
  return (
    <Box>
      {/* <Layout> */}
      {/* <ServingMain /> */}
      <Menus />
      {/* {Array(100)
          .fill("")
          .map((_, i) => (
            <div key={i}>Main content</div>
          ))} */}
      {/* </Layout> */}
    </Box>
  );
}
