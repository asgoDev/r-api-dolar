import "../styles/dollar-status-leyend.css";
import equal from "../assets/equal.svg";
import Arrow from "./Arrow";

const DollarStatusLeyend = () => {
  return (
    <div className="dollar-status-leyend">
      <Arrow />
      <img src={equal} alt="" />
      <Arrow color="red" />
    </div>
  );
};

export default DollarStatusLeyend;
