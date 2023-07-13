import React from "react";
import PropTypes from "prop-types";

const Komponenta = ({ ime, prezime, dob, grad }) => {
  return (
    <div>
      <h1>Ime:{ime}</h1>
      <p>Prezime: {prezime}</p>
      <p>Dob: {dob}</p>
      <p>Grad: {grad}</p>
    </div>
  );
};

Komponenta.propTypes = {
  Ime: PropTypes.string.isRequired,
  Prezime: PropTypes.string.isRequired,
  Dob: PropTypes.number.isRequired,
  Grad: PropTypes.string.isRequired,
};

Komponenta.defaultProps = {
  ime: "",
  prezime: "",
  dob: "",
  grad: "",
};

export default Komponenta;
