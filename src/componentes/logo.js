import React from "react";
import asaf_logo from "../imagenes/asaf_logo.png";

const logoComponent = () => {
  return (
    <div className="cont_logo">
      <img className="logo" src={asaf_logo} alt="logo" />
    </div>
  );
};

export default logoComponent;
