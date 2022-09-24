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
    <div className="main">
      <input
        type="text"
        value={buscar}
        onChange={busquedaPersonaje}
        placeholder="Introduce un personaje"
      />
      <table className="tablePersonajes">
        <tbody>
          {data.map((personaje) => (
            <tr key={personaje.id}>
              <td>{personaje.name}</td>
              <td>
                <img src={personaje.image} alt="name" />
                <a href="{personaje}">{console.log(personajes)}</a>
              </td>
              <td>Tipo de Personaje: {personaje.species}</td>
              <td>{personaje.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Main };
