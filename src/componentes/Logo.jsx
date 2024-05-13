import propTypes from "prop-types";

import "../css/Logo.css";
function Logo({ logo }) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={logo.src}
        className="freecodecamp-logo"
        alt="logo de freecodecamp"
      />
    </div>
  );
}

Logo.propTypes = {
  logo: propTypes.object.isRequired,
};
export default Logo;
