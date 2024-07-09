import { useContext } from "react";
import "../styles/my-date.css";
import { GlobalContext } from "../context/GlobalContextProvider";
const MyDate = () => {
  const {currentDate} = useContext(GlobalContext)
  return <p className="app-date">{currentDate}</p>;
};

export default MyDate;
