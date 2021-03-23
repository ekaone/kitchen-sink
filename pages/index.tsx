import Head from "next/head";
// components
import { Layout, Hero } from "../components";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        {/* {Array(100)
          .fill("")
          .map((_, i) => (
            <div key={i}>Main content</div>
          ))} */}
      </Layout>
    </div>
  );
}
