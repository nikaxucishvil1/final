import React, { createContext } from "react";

import { useState } from "react";
import datajson from "../../../data.json";

export const GlobalState = createContext<GlobalStateType | null>(null);

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  const typedDataJson = datajson as DataType[];
  const [data] = useState<DataType[]>(typedDataJson);
  const [cart, setCart] = useState<DataType[]>([]);
  return (
    <GlobalState.Provider value={{ data, cart, setCart }}>
      {children}
    </GlobalState.Provider>
  );
};

export default Mainlayout;
