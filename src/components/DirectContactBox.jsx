import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DirectContactBox({ icon, mainText, subText, AosDelay }) {
  const icons = {
    email: faEnvelope,
    phone: faPhone,
    address: faMapLocationDot,
  };
  return (
    <div
      className="box d-flex flex-column justify-content-center align-items-center rounded-3 text-center"
      data-aos="fade-up"
      data-aos-delay={AosDelay}
    >
      <div className="icon d-flex justify-content-center align-items-center rounded-circle">
        <FontAwesomeIcon icon={icons[icon]} className="fs-2" />
      </div>
      <h3 className="mt-3 main-color">{mainText}</h3>
      <p className="text-black-50">{subText}</p>
    </div>
  );
}
export default DirectContactBox;
