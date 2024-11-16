import {
  faAward,
  faCrown,
  faHeadset,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Advan({ advanIcon, advanText, AosDelay }) {
  const icons = {
    award: faAward,
    crown: faCrown,
    truck: faTruckFast,
    headset: faHeadset,
  };
  return (
    <div
      className="advan-box d-flex flex-column justify-content-center align-items-center gap-1 first-bg rounded-3 py-3"
      data-aos="fade-up"
      data-aos-delay={AosDelay}
    >
      <div className="icon rounded-circle d-flex justify-content-center align-items-center main-bg">
        <FontAwesomeIcon icon={icons[advanIcon]} className="fs-5 text-white" />
      </div>
      <div className="advan-text">{advanText}</div>
    </div>
  );
}
export default React.memo(Advan);
