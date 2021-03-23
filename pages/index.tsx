import Head from "next/head";
import { Box, VStack } from "@chakra-ui/react";

// components
import {
  Layout,
  Hero,
  Serving,
  MenuNavigation,
  SectionMenu,
} from "../components";

export default function Home() {
  return (
    <Box>
      <Layout>
        <Box>
          <Hero />
          <SectionMenu />
        </Box>
        {/* {Array(100)
          .fill("")
          .map((_, i) => (
            <div key={i}>Main content</div>
          ))} */}
      </Layout>
    </Box>
  );
}
