import React from "react";

const ChildKomponenta = (props) => {
  return (
    <div>
      <h2>Ime: {props.ime}</h2>
      <h2>Dob: {props.dob}</h2>
    </div>
  );
};

export default ChildKomponenta;
