import { Input } from "@/app/components/Input";
import React from "react";

export const Home = () => {
  return (
    <main className="container w-screen h-screen mx-auto flex items-center justify-center flex-col ">
      <header className="flex text-center flex-col">
        <h1 className="font-bold text-4xl text-white">Previsão do tempo</h1>
        <h1 className="font-semibold text-xl text-white mt-6">
          Mantenha-se informado sobre o clima da sua região ou em qualquer parte do mundo!
        </h1>
      </header>

      <Input />
    </main>
  );
};
