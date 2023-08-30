import React from "react";
import "../estilos/BotonClear.css";

const BotonClear = (props) => (
  <div className="btnClear" onClick={props.setInputClear}>
    {props.children}
  </div>
);

export default BotonClear;
