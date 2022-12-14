import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles/main.css";

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
      {
      }
      <div className="contenido-buscador">
        <input className="contenido-buscador__input"
          type="text"
          value={buscar}
          onChange={busquedaPersonaje}
          placeholder="Introduce un personaje"
        />
      </div>
      <div className="contenido-personajes">
        {data.map((personaje) => (
          <div className="personaje" key={personaje.id}>
            <img className="personaje-img" src={personaje.image} alt="name" />
            <div className="informacion-personaje">
              <p className="informacion-personaje__nombre">{personaje.name}</p>
              <p className="informacion-personaje__tipo">Tipo de Personaje: {personaje.species}</p>
              <p className="informacion-personaje__status">{personaje.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Main };
