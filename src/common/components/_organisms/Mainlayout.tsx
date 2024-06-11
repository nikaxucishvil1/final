import React, { createContext } from "react";

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
  const [Users, setUsers] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [logedUser, setLogedUser] = useState("");
 
  return (
    <GlobalState.Provider
      value={{
        data,
        countries,
        cart,
        setCart,
        nav,
        setNav,
        Users,
        setUsers,
        setLogedUser,
        logedUser,
        setIsLogedIn,
        isLogedIn,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default Mainlayout;
