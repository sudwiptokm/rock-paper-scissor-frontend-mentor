import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ItemContainer from "../components/ItemContainer";
import Result from "../components/Result";
import ScoreCard from "../components/ScoreCard";
import { random } from "../utils/common";

const Home: NextPage = () => {
  const [play, setPlay] = useState(true);
  const [current, setCurrent] = useState(0);
  const [ai, setAi] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let x = random();
    if (play) {
      setAi(x);
    }
  }, [play]);

  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white text-4xl flex flex-col items-center justify-between min-h-screen w-screen">
        <ScoreCard score={score} />
        <div className="mt-24 flex-grow mobile:scale-75 sm:scale-100 w-full flex justify-center">
          {play ? (
            <ItemContainer setSelection={setCurrent} changePage={setPlay} />
          ) : (
            <div className="mobile:scale-50 sm:scale-75">
              <Result
                selection={current}
                backToPlay={setPlay}
                score={score}
                changeScore={setScore}
                aiSelection={ai}
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
