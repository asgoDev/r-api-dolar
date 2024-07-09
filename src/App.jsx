import { useContext } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import { GlobalContext } from "./context/GlobalContextProvider";
import Calculator from "./components/Calculator";

function App() {
  const { saludito } = useContext(GlobalContext);
  console.log(saludito);
  return (
    <>
      <AppHeader />
      <AppMain />
      <Calculator />
    </>
  );
}

export default App;
