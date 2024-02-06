import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Listado.css";

function OfertasComponent() {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/productos/ofertas"
        );
        setOfertas(response.data);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchOfertas();
  }, []);

  return (
    <div className="container">
      <div className="cabecera">
        <h1 className="title">Listado de Productos en Oferta!!</h1>
        <Link to="/" className="linkOfertas">
          Volver
        </Link>
      </div>
      <div className="productos">
        <ul className="listaProductos">
          {ofertas.map((producto) => (
            <li key={producto.id} className="contenedorProducto">
              <img src={producto.img} alt={`Imagen de ${producto.name}`} />
              <div className="infoProducto">
                <strong>{producto.name}</strong>
                <span>{producto.price}€</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OfertasComponent;
