import * as React from "react";
import imagen1 from "../assets/img/imagen1.png";

//import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="mainHeader">
      <h2 className="header">Aplicación de búsqueda de Personajes de Game of Thrones</h2>
      <img className="headerImg" src={imagen1} alt="" />

    </div>
  );
};

export default Header;
