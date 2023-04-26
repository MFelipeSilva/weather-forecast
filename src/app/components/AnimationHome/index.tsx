import React, { useState } from "react";
import Lottie from "lottie-react";

import Link from "next/link";
import IconHome from "../../../assets/icon-home-white.json";


export const AnimatedHomeIcon = () => {
  const [handleLoop, setHandleLoop] = useState<number>(0);

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
        <Lottie animationData={IconHome} onMouseOver={() =>setHandleLoop(0.5)}  loop={handleLoop} autoPlay={false} className="absolute top-3 left-3.5 z-10 w-9" />
      </Link>
  );
};
