import React from "react";

import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

import { ContentInformation } from "@/app/components/ContentInformation";

export const Home = () => {
  return (
    <main className="container w-screen h-screen mx-auto flex items-center justify-center flex-col z-10">
      <header className="flex text-center flex-col">
        <h1 className="font-bold text-4xl text-white">Previsão do Tempo</h1>
        <h1 className="font-regular text-xl text-white mt-5 mb-20 underline underline-offset-8">
          Mantenha-se informado sobre o clima da sua região ou em qualquer parte do mundo.
        </h1>
      </header>

      <div className="flex flex-row">
        <Input />
        <Button />
      </div>
      
      <ContentInformation />
    </main>
  );
};
