import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import TopFooter from "@/components/TopFooter";
import { Product } from "@/type";
import Head from "next/head";
interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {
  return (
    <>
      <Head>
        <title>Shoppers.com | Save Money. Live Better</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
      <main className="bg-lightBlue">
        <div className="max-w-contentContainer mx-auto bg-white">
          <Banner />
          <Products productData={productData} />
        </div>
      </main>
    </>
  );
}

// ========= SSR data fetching here ========= //
export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();

  return {
    props: { productData },
  };
};
