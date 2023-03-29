"use client";

import React from "react";
import { Home } from "./pages/Home";

import { QueryClientProvider } from "react-query";
import queryClient from "@/services/settings/configQuery";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Background } from "./components/Background";

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <main className="">
          <Background />
          <Home />
        </main>
      </Provider>
    </QueryClientProvider>
  );
}
