import { createContext, useContext } from "react";
import { getLocalDate } from "../utils/date";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const saludito = "ContextProvider is working";

  const currentDate = getLocalDate();

  const tasaDolarToday = 40.56;
  const tasas = {
    dolarToday: tasaDolarToday,
  };

  const globalContextValues = {
    saludito,
    tasas,
    currentDate,
  };

  return (
    <GlobalContext.Provider value={globalContextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
