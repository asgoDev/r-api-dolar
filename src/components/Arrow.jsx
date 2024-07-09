import "../styles/arrow.css";

const Arrow = ({ color = "green" }) => {
  return (
    <svg className={color} 
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 0 960 960"
      width="20"
    >
        <path d="m422.47,718.29l-347.94,-353.38q-38.36,-38.96 -17.81,-90.43t75.34,-51.48l695.88,0q54.79,0 75.34,51.48t-17.81,90.43l-347.94,353.38q-13.7,13.91 -27.4,19.48t-30.14,5.57q-16.44,0 -30.14,-5.57t-27.4,-19.48z"/>
    </svg>
  );
};

export default Arrow;
