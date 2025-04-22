// Archivo principal para ejecutar funciones CRUD (a implementar)

import { conectDB } from "./config/mongo";

import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
  } from "./producto.crud";

  async function ejemploCrearProducto() {
    const nuevoProducto = await crearProducto({
      nombre: "Vaso térmico",
      descripcion: "Vaso de acero inoxidable",
      precio: 3500,
      stock: 10,
    });
    console.log(" Producto creado:", nuevoProducto);
  }
  
  // Obtener todos los productos
  async function ejemploObtenerProductos() {
    const productos = await obtenerProductos();
    console.log("Todos los productos:", productos);
  }
  
  // Obtener producto por ID
  async function ejemploObtenerProductoPorId() {
    const id = "TU_ID_AQUI"; // Reemplazá con un _id real de MongoDB
    const producto = await obtenerProductoPorId(id);
    console.log("Producto encontrado:", producto);
  }
  
  // Actualizar producto
  async function ejemploActualizarProducto() {
    const id = "TU ID AQUI"; // Reemplazá con un _id real
    const actualizado = await actualizarProducto(id, {
      precio: 3800,
      stock: 12,
    });
    console.log("Producto actualizado:", actualizado);
  }
  
  //  Eliminar producto
  async function ejemploEliminarProducto() {
    const id = "TU-ID-AQUI"; // Reemplazá con un _id real
    const eliminado = await eliminarProducto(id);
    console.log("Producto eliminado:", eliminado);
  }
  
  // Función principal
  async function main() {
    try {
      await conectDB();
  
      //  Elegí cuál querés probar:
      //await ejemploCrearProducto();
      await ejemploObtenerProductos();
      // await ejemploObtenerProductoPorId();
      // await ejemploActualizarProducto();
      // await ejemploEliminarProducto();
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  main();