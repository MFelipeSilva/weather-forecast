"use client";

import { QueryClientProvider } from "react-query";
import queryClient from "@/services/settings/configQuery";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Poppins } from "@next/font/google";
import { LayoutHome } from "../components/LayoutHome";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function Home(): any {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <main className={`${poppins.className}`}>
            <LayoutHome />
          </main>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}
