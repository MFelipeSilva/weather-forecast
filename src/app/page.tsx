import React from "react";
import { Home } from "./pages/Home"
import nuvens from "../assets/nuvens.png"

export default function App() {
  return (
    <main className="">
      <Home />
      <img className="absolute bottom-0 right-0" src={nuvens.src} alt="nuvem" />
    </main>
  )
}
