"use client";
import React from "react";
import { Poppins } from "@next/font/google";

import { HelcomePage } from "./helcome";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function App() {
  return (
    <main className={`${poppins.className}`}>
      <HelcomePage />
    </main>
  );
}
