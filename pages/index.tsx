import Head from "next/head";
// components
import { Layout, Hero, Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kitchen sink</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />

      {Array(100)
        .fill("")
        .map((_, i) => (
          <div>Main content</div>
        ))}
    </div>
  );
}
