import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../styles/Listado.css";

function ListadoComponent() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/productos");
        setProductos(response.data);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="container">
      {" "}
      {/* Asegúrate de que el contenedor principal tenga la clase 'container' */}
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>{producto.name}</strong>: {producto.price}
          </li>
        ))}
        
      </ul>

      <Link to="/ofertas" className="linkOfertas">Ver ofertas</Link>

    </div>
  );
}

export default ListadoComponent;
