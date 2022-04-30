import React, { useEffect, useState } from "react";
import { random } from "../utils/common";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

export default function Result({
  selection,
  backToPlay,
  score,
  changeScore,
}: any) {
  let aiSelection = random();
  let verdict;
  let newScore: number;
  if (aiSelection === selection) {
    verdict = "DRAW";
  } else {
    let dif = aiSelection - 1;
    if (dif < 0) dif = 2;
    if (dif === selection) {
      verdict = "YOU WIN";
      newScore = score + 1;
    } else {
      verdict = "YOU LOSE";
      newScore = score - 1;
    }
  }

  //   useEffect(() => {}, []);

  //Click Handler
  const clickHandler = () => {
    backToPlay(true);
  };
  console.log(selection, aiSelection, verdict, score);
  return (
    <div>
      <div className="flex justify-evenly gap-40">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">YOUR PICK</p>
          <div className="scale-150 mt-20">
            {selection === 0 ? (
              <Paper />
            ) : selection === 1 ? (
              <Rock />
            ) : (
              <Scissors />
            )}
          </div>
        </div>
        <div className="scale-150 flex flex-col justify-center items-center ml-10">
          <p className="font-bold">{verdict}</p>
          <div
            className="bg-white text-[#2a46c0] px-4 py-2 rounded-lg text-lg mt-5 cursor-pointer"
            onClick={clickHandler}
          >
            PLAY AGAIN
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">THE HOUSE PICK</p>
          <div className="scale-150 mt-20">
            {aiSelection === 0 ? (
              <Paper />
            ) : aiSelection === 1 ? (
              <Rock />
            ) : (
              <Scissors />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
