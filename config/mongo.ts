// Conexion con la base de datos MongoDB (pendiente)

import mongoose from "mongoose";


const mongoURI = "mongodb://localhost:27017/tienda";

export const conectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
    
  }
};
