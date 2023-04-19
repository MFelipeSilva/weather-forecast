import React from "react";
import icon from "../../assets/favicon.svg";
import Link from "next/link";

export const HelcomePage = () => {
  return (
    <div className="container w-screen h-screen flex mx-auto items-center justify-center flex-col">
      <main className="flex items-center mb-24 justify-center flex-col">
        <h1 className="absolute font-extrabold  text-7xl tracking-wide text-white">
          Weather Forecast
        </h1>

        <img
          className="relative top-20 flex w-72  h-72"
          src={icon.src}
          alt=""
        />
      </main>

      <div className="flex items-center justify-center">
        <Link href="/home">
          <button
            className="bg-white font-medium text-base text-cyan-500 h-20 w-48 rounded-md transition-all duration-300 ease-in-out hover:bg-transparent hover:border-2 hover:text-white"
          >
            LET'S SEARCH
          </button>
        </Link>
      </div>
    </div>
  );
};
