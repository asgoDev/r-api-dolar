import "../styles/app-main.css";
import DollarStatusWheel from "./DollarStatusWheel";
import MyDate from "./MyDate";
import OtherRefs from "./OtherRefs";

const AppMain = () => {
  return (
    <main className="app-main">
      <MyDate />
      <DollarStatusWheel />
      <OtherRefs />
    </main>
  );
};

export default AppMain;
