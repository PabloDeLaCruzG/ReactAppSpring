import React, { useState, useEffect } from "react";
import axios from "axios";
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
        {" "}
        {}
        <h1>Listado de Productos en Oferta</h1>
        <ul>
          {ofertas.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.name}</strong>: {producto.price}
            </li>
          ))}
        </ul>

      </div>
      
  );
}

export default OfertasComponent;
