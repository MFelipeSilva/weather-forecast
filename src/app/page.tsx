import React from "react";
import { Home } from "./pages/Home"
import nuvens from "../assets/nuvens.svg"
import nuvem from "../assets/nuvemesol.svg"

export default function App() {
  return (
    <main className="">
      <img className="absolute object-cover opacity-40 mt-10 ml-7 w-110 max-md:w-56" src={nuvem.src} alt="nuvem" />
        <Home />
      <img className="absolute object-cover bottom-0 right-0 opacity-40 mb-10 mr-7 w-140 max-md:w-56" src={nuvens.src} alt="nuvem" />
    </main>
  )
}
