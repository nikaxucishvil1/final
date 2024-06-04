import Footer from "../_molecules/Footer/Footer";
import Header from "../_molecules/Header/Header";
import React, { createContext, useState } from "react";
import datajson from "../../../data.json";

const typedDataJson = datajson as DataType[];
export const GlobalState = createContext<GlobalStateType | null>(null);

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataType[]>(typedDataJson);

  return (
    <GlobalState.Provider
      value={{
        data,
        setData,
      }}
    >
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </GlobalState.Provider>
  );
};

export default Mainlayout;
