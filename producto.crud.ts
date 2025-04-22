// Archivo para implementar funciones CRUD (Crear, Leer, Obtener, Actualizar, Eliminar) de productos con Mongoose.

import { Producto } from "./productos.model";
import { Types } from "mongoose";

// Crear un producto
export async function crearProducto(data: {
  nombre: string;
  descripcion?: string;
  precio: number;
  stock?: number;
  disponible?: boolean;
}) {
  const producto = new Producto(data);
  await producto.save();
  return producto;
}

// Obtener todos los productos

export async function obtenerProductos() {
  return await Producto.find();
}

// Obtener producto por ID
 export async function obtenerProductoPorId(id: string | Types.ObjectId) {
  return await Producto.findById(id);
}

// Actualizar un producto
  export async function actualizarProducto(id: string | Types.ObjectId, data: any) {
  return await Producto.findByIdAndUpdate(id, data, { new: true });
}

// Eliminar un producto
   export async function eliminarProducto(id: string | Types.ObjectId) {
  return await Producto.findByIdAndDelete(id);
}
