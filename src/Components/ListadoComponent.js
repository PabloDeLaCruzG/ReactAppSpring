import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Hay que instalar npm install @material-ui/core
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import "../styles/Listado.css";

function ListadoComponent() {
  // Estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]);
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img: "",
  });

  // Estado para controlar la apertura y cierre del diálogo del formulario
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Función para obtener la lista de productos desde la API
    // Definición de la función fetchProductos
    const fetchProductos = async () => {
      try {
        // Intenta hacer una solicitud GET a la URL para obtener los productos
        const response = await axios.get("http://localhost:8080/api/productos");

        // Si la solicitud es exitosa, actualiza el estado 'productos' con los datos obtenidos de la respuesta
        setProductos(response.data);
      } catch (error) {
        // Si ocurre algún error durante la solicitud, entra en el bloque catch
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchProductos(); // Llamada a la función al cargar el componente
  }, []);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    // Extraemos el nombre y el valor del campo que ha cambiado del evento
    const { name, value } = e.target;
    // Actualizamos el estado 'formData' con los nuevos valores.
    // Usamos el spread operator (...) para mantener los valores existentes en 'formData'
    // y solo actualizar el campo específico que ha cambiado.
    setFormData({
      ...formData,
      [name]: value, // Actualizamos el campo con el nuevo valor
    });
  };

  const handleSubmit = async (e) => {
    // Previene el comportamiento predeterminado de envío del formulario
    e.preventDefault();
    try {
      // Verifica si formData contiene un ID; si es así, el producto ya existe y se debe enviar una solicitud PUT para actualizarlo
      if (formData.id) {
        // Realiza una solicitud PUT al endpoint de la API para actualizar el producto existente
        await axios.put(
          `http://localhost:8080/api/productos/${formData.id}`,
          formData
        );
        // Muestra una alerta indicando que el producto se ha actualizado correctamente
        alert("Producto actualizado correctamente");
      } else {
        // Si formData no contiene un ID, significa que se está agregando un nuevo producto y se debe enviar una solicitud POST
        // Realiza una solicitud POST al endpoint de la API para agregar un nuevo producto
        await axios.post("http://localhost:8080/api/productos", formData);
        // Muestra una alerta indicando que el producto se ha agregado correctamente
        alert("Producto agregado correctamente");
      }
      // Después de enviar el formulario con éxito, hace una solicitud GET para obtener la lista actualizada de productos
      const response = await axios.get("http://localhost:8080/api/productos");
      // Actualiza el estado 'productos' con los datos de la respuesta (la lista actualizada de productos)
      setProductos(response.data);
      // Llama a la función resetForm para limpiar el formulario y cerrar el diálogo
      resetForm();
    } catch (error) {
      // Captura y maneja cualquier error que ocurra durante el envío del formulario
      console.error("Error al enviar el formulario:", error);
    }
  };

  // Función para restablecer el formulario y cerrar el diálogo
  const resetForm = () => {
    // Establece los valores de los campos del formulario a vacío
    setFormData({
      name: "",
      price: "",
      img: "",
    });
    // Cierra el diálogo de formulario
    setOpenDialog(false);
  };

  // Función para manejar la edición de un producto
  const handleEdit = (producto) => {
    // Establece los datos del producto seleccionado en el estado 'formData' para editarlos
    setFormData(producto);
    // Abre el diálogo de formulario para permitir la edición del producto
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/productos/${id}`);
      const updatedProductos = productos.filter(
        (producto) => producto.id !== id
      );
      setProductos(updatedProductos);
      alert("Producto eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    // Contenedor principal del listado
    <div className="container">
      {/* Cabecera del listado */}
      <div className="cabecera">
        <h1 className="title">Listado de Productos</h1>
        <Link to="/ofertas" className="linkOfertas">
          Ver ofertas
        </Link>
        {/* Botón para abrir el diálogo de añadir producto */}
        <button className="btnAdd" onClick={() => setOpenDialog(true)}>
          Añadir Producto
        </button>
      </div>
      {/* Listado de productos */}
      <div className="productos">
        <ul className="listaProductos">
          {/* Mapeo de la lista de productos */}
          {productos.map((producto) => (
            <li key={producto.id} className="contenedorProducto">
              <img src={producto.img} alt={`Imagen de ${producto.name}`} />
              <div className="infoProducto">
                <strong>{producto.name}</strong>
                <span>{producto.price}€</span>
                <button
                  className="btnEditarRemove"
                  onClick={() => handleEdit(producto)}
                >
                  Editar
                </button>
                <button
                  className="btnEditarRemove"
                  onClick={() => handleDelete(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Diálogo para añadir nuevo producto */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle className="dialogTitle">Añadir Nuevo Producto</DialogTitle>
        <DialogContent className="dialogContent">
          <form className="dialogForm" onSubmit={handleSubmit}>
            {/* Campos del formulario */}
            <div className="dialogFormItem">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="dialogFormItem">
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="dialogFormItem">
              <label htmlFor="img">URL de la imagen:</label>
              <input
                type="text"
                id="img"
                name="img"
                value={formData.img}
                onChange={handleChange}
              />
            </div>
          </form>
        </DialogContent>
        {/* Botones del diálogo */}
        <DialogActions className="dialogActions">
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListadoComponent;
