import React, { useState } from "react";

const ProductosDisponibles = [
  { id: 1, nombre: "Camisa", precio: 20 },
  { id: 2, nombre: "Pantalón", precio: 30 },
  { id: 3, nombre: "Zapatos", precio: 50 },
];

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [error, setError] = useState("");

  const [discountPercentage, setDiscountPercentage] = useState(0);

  const agregarProducto = (producto) => {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularPrecioUnico = (producto) => {
    return producto.precio * producto.cantidad;
  };

  const calcularPrecioTotal = () => {
    const precioWithoutDiscount = carrito.reduce(
      (total, producto) => total + calcularPrecioUnico(producto),
      0
    );
    const discount = precioWithoutDiscount * (discountPercentage / 100);
    return precioWithoutDiscount - discount;
  };

  const handleChange = (e) => {
    if (e.target.value !== "SAVE10") {
      setError("El descuento introducido no es correcto");
      return;
    }
    setDiscountPercentage(10);
  };

  return (
    <div>
      <h2>Productos Disponibles:</h2>
      <ul>
        {ProductosDisponibles.map((producto) => (
          <li key={producto.id}>
            {producto.nombre}
            <button onClick={() => agregarProducto(producto)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
      <h2>Carrito:</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarProducto(producto.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h2>Precio único:</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            Cantidad: {producto.cantidad} - Precio Total: $
            {calcularPrecioUnico(producto)}
          </li>
        ))}
      </ul>
      <h2>Precio Total del Carrito: ${calcularPrecioTotal()}</h2>
      <h2>Aplicar descuento:</h2>
      <label>Descuento</label>
      <input
        type="text"
        id="discount"
        name="discount"
        onChange={handleChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Carrito;
