// Aquí se definirán los campos y validaciones del modelo de producto.

import mongoose from "mongoose";

// Definimos el esquema de los documentos "Producto"
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, default: 0, required: true },
  stock: { type: Number, default: 0 },
  disponible: { type: Boolean, default: true },
});

// Creamos y exportamos el modelo
export const Producto = mongoose.model("Producto", ProductoSchema);
