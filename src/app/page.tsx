'use client'

import React from "react";
import { Home } from "./pages/Home";
import nuvens from "../assets/nuvens.svg";
import nuvem from "../assets/nuvemesol.svg";

import { QueryClientProvider } from "react-query";
import queryClient from "@/services/settings/configQuery";

import { store } from "@/redux/store";
import { Provider } from "react-redux";


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <main className="">
        <img
          className="absolute object-cover opacity-40 mt-10 ml-7 w-110 max-md:w-56 -z-10"
          src={nuvem.src}
          alt="nuvem"
        />
        <Home />
        <img
          className="absolute object-cover bottom-0 right-0 opacity-40 mb-10 mr-7 w-140 max-md:w-56  -z-10"
          src={nuvens.src}
          alt="nuvem"
        />
        </main>
      </Provider>
      
    </QueryClientProvider>
  );
}
