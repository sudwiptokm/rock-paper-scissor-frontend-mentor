import React from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Image from "next/image";

export default function ItemContainer({ setSelection, changePage }: any) {
  const clickHandler = (id: number) => {
    // console.log("item", id);
    setSelection(id);
    // changePage(false);
  };

  return (
    <div className="w-[450px] relative">
      <div className="absolute top-20 mobile2:left-12 mobile:left-20 sm:left-20 -z-10">
        <Image
          src={require(`../public/bg-triangle.svg`)}
          alt="triangle"
        ></Image>
      </div>
      <div className="flex justify-between">
        <div
          onMouseDown={() => clickHandler(0)}
          onClick={() => changePage(false)}
        >
          <Paper />
        </div>
        <div
          onMouseDown={() => clickHandler(2)}
          onClick={() => changePage(false)}
        >
          <Scissors />
        </div>
      </div>
      <div
        className="flex justify-center mt-24 ml-2"
        onMouseDown={() => clickHandler(1)}
        onClick={() => changePage(false)}
      >
        <Rock />
      </div>
    </div>
  );
}
