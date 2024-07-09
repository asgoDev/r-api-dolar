import "../styles/other-refs.css";

const OtherRefs = () => {
  return (
    <div className="other-refs">
      <h3 className="other-refs__title">Otras Referencias:</h3>
      <ul className="other-refs__list">
        <li className="other-refs__item">
          <span className="other-refs__item-title">BCV:</span> 23.40{" "}
          <span className="other-refs__item-symbol">Bs. D</span>
        </li>
        <li className="other-refs__item">
          <span className="other-refs__item-title">Cucuta:</span> 23.40{" "}
          <span className="other-refs__item-symbol">Bs. D</span>
        </li>
        <li className="other-refs__item">
          <span className="other-refs__item-title">Monitor:</span> 23.40{" "}
          <span className="other-refs__item-symbol">Bs. D</span>
        </li>
      </ul>
    </div>
  );
};

export default OtherRefs;
