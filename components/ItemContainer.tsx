import React from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Image from "next/image";

export default function ItemContainer({ setSelection, changePage }: any) {
  const clickHandler = (id: number) => {
    setSelection(id);
    changePage(false);
  };

  return (
    <div className="w-[450px] relative">
      <div className="absolute top-20 left-20 -z-10">
        <Image
          src={require(`../public/bg-triangle.svg`)}
          alt="triangle"
        ></Image>
      </div>
      <div className="flex justify-between">
        <div onClick={() => clickHandler(0)}>
          <Paper />
        </div>
        <div onClick={() => clickHandler(2)}>
          <Scissors />
        </div>
      </div>
      <div
        className="flex justify-center mt-24 ml-2"
        onClick={() => clickHandler(1)}
      >
        <Rock />
      </div>
    </div>
  );
}
