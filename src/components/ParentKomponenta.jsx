import React from "react";
import ChildKomponenta from "./ChildKomponenta";

const ParentKomponenta = () => {
  const ime = "Domagoj";
  const dob = 29;

  return (
    <div>
      <h1>Parent Komponenta</h1>
      <ChildKomponenta ime={ime} dob={dob} />
    </div>
  );
};

export default ParentKomponenta;
