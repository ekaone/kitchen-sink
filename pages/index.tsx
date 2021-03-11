import Head from "next/head";
// components
import { Layout } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kitchen sink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {Array(100)
          .fill("")
          .map((_, i) => (
            <div>Main content</div>
          ))}
      </Layout>
    </div>
  );
}
