import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoppers.com | Save Money. Live Better</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
      </main>
    </>
  );
}
