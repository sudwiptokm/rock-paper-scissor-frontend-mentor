import React from "react";
import Modal from "./Modal";

export default function Footer() {
  return (
    <div className="relative w-screen">
      <div>
        <p className="text-center text-sm">
          CODED BY{" "}
          <a
            href="https://sudwipto-portfolio.netlify.app/"
            className="text-[#2a46c0]"
          >
            SUDWIPTO KUMAR MONDAL
          </a>
          .
        </p>
      </div>
      <div className="absolute border-2 border-gray-400 rounded-3xl px-6 py-3 -top-[60px] right-4 text-gray-400 text-xl cursor-pointer hover:text-gray-100">
        <Modal />
      </div>
    </div>
  );
}
