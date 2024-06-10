import React, { createContext, useEffect } from "react";

import { useState } from "react";
import datajson from "../../../data.json";
import countryjson from "../../../countries.json";

export const GlobalState = createContext<GlobalStateType | null>(null);

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  const typedDataJson = datajson as DataType[];
  const countryDataJson = countryjson as any;
  const [data] = useState<DataType[]>(typedDataJson);
  const [countries] = useState<any>(countryDataJson);
  const [cart, setCart] = useState<DataType[]>([]);
  const [nav, setNav] = useState("Home");
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, []);

  return (
    <GlobalState.Provider
      value={{ data, countries, cart, setCart, nav, setNav }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default Mainlayout;
