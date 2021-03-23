import Head from "next/head";
// components
import { Layout, Hero, Serving } from "../components";

export default function Home() {
  return (
    <div>
      {/* <Layout> */}
      <Serving dark />
      <Serving />
      {/* {Array(100)
          .fill("")
          .map((_, i) => (
            <div key={i}>Main content</div>
          ))} */}
      {/* </Layout> */}
    </div>
  );
}
