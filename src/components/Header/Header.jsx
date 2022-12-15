import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="nav__enlace" href="#">Inicio</a>
        <a className="nav__enlace" href="#">Personajes </a>
      </nav>

    </header>
  );
};

export { Header };
