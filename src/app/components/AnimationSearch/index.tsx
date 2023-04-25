import React, { useState } from "react";
import Lottie from "lottie-react";

import Link from "next/link";
import IconSearch from "../../../assets/icon-search.json";

interface Props {
  handleLoop: number;
  setHandleLoop: (value: number) => void;
}


export const AnimatedSearchIcon = ({handleLoop, setHandleLoop}: Props) => {
  if(handleLoop === 0.5) {
    setTimeout(() => {
      const decreaseLoop = () => {
        setHandleLoop(0)
      }
      
      decreaseLoop()
    }, 2000) 
  }

  return (
      <Link href="/">
        <Lottie animationData={IconSearch} loop={handleLoop} autoPlay={false} className="flex mb-1 z-10 w-7 max-lg:w-6 max-md:w-5" />
      </Link>
  );
};
