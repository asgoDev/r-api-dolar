import { useContext, useState } from "react";
import "../styles/dolar-status-wheel.css";
import DollarStatusLeyend from "./DollarStatusLeyend";
import { GlobalContext } from "../context/GlobalContextProvider";

const DollarStatusWheel = () => {

  const trendDictionary = {
    RISE: 'upward-trend',
    FALL: 'downward-trend',
    FLAT: 'stable-trend',
  }

  const { tasas } = useContext(GlobalContext);
  const [currencyTrend, setCurrencyTrend] = useState(trendDictionary.FLAT)


  return (
    <div className="dollar-wheel-container">
      <div className="dollar-wheel non-selectable">
        {/* <span className="dollar-wheel__indicator dollar-wheel__indicator--up">
          ...
        </span> */}
        <span className={`dollar-wheel__ammount dollar-wheel__ammount--${currencyTrend}`}>{tasas.dolarToday}</span>
        {/* <span className="dollar-wheel__indicator dollar-wheel__indicator--down">
          ...
        </span> */}
        <span className="dollar-wheel__concurrency-symbol">Bs. D</span>
      </div>
      <DollarStatusLeyend />
    </div>
  );
};

export default DollarStatusWheel;
