import React from "react";
import Image from "next/image";

export default function ScoreCard() {
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-3xl px-8 py-6 flex justify-between gap-14 md:gap-40 mt-16">
        <Image src={require("../public/logo.svg")} alt="logo" />
        <div className="w-[150px] bg-white rounded-lg flex justify-center items-center flex-col py-3">
          <p className="text-[#2a46c0] text-lg">SCORE</p>
          <p className="text-[#3b4363] text-6xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
