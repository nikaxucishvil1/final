import React, { createContext, useState } from "react";
import Footer from "../_molecules/Footer/Footer";
import Header from "../_molecules/Header/Header";
import datajson from "../../../data.json";
import Search from "../_molecules/Search/Search";
import Nanbar from "../_molecules/NavBar/Nanbar";
import Show from "../_molecules/ShowPlace/Show";

const typedDataJson = datajson as DataType[];
export const GlobalState = createContext<GlobalStateType | null>(null);

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  const [data] = useState<DataType[]>(typedDataJson);
  const [cart, setCart] = useState<DataType[]>([]);

  return (
    <GlobalState.Provider value={{ data, cart, setCart }}>
      <div>
        <Header />
        <Search />
        <Nanbar />
        <Show place="home" />
        {children}
        <Footer />
      </div>
    </GlobalState.Provider>
  );
};

export default Mainlayout;
