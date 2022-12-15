import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./main.css";

const Main = () => {
  // hooks useState
  const [personajes, setPersonajes] = useState([]);
  const [buscar, setBuscar] = useState("");
  // Funciones para traer datos de la api
  const URL = "https://rickandmortyapi.com/api/character";
  const resultado = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const datas = data.results;
    console.log(datas);
    setPersonajes(datas);
  };
  // Metodo filtrado
  let data = [];
  if (!buscar) {
    data = personajes;
  } else {
    data = personajes.filter(
      (personaje) =>
        (data = personaje.name.toLowerCase().includes(buscar.toLowerCase()))
    );
  }
  // Funcion de busqueda
  const busquedaPersonaje = (e) => {
    setBuscar(e.target.value);
  };

  useEffect(() => {
    resultado();
  }, []);
  //renderizacion de la vista
  return (
    <div className="contenido">
      <div className="buscador">
        <input className="buscador__input"
          type="text"
          value={buscar}
          onChange={busquedaPersonaje}
          placeholder="Introduce un personaje"
        />
      </div>
      <div className="contenedor-personajes">
        {data.map((personaje) => (
          <div className="personaje" key={personaje.id}>
            <img className="personaje__img" src={personaje.image} alt="name" />
            <div className="personaje__informacion">
              <p className="personaje__nombre">{personaje.name}</p>
              <p className="personaje__tipo">Personaje: {personaje.species}</p>
              <p className="personaje__estado">Estado: {personaje.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Main };
