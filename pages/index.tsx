import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import ItemContainer from "../components/ItemContainer";
import ScoreCard from "../components/ScoreCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white text-4xl flex flex-col items-center justify-between h-screen">
        <ScoreCard />
        <div className="mt-24 flex-grow">
          <ItemContainer />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
