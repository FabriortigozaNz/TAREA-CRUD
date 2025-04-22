# TAREA-CRUD



# Proyecto CRUD de Productos con MongoDB, Mongoose y TypeScript

Este es un proyecto básico que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de productos en una tienda. Utiliza **MongoDB** como base de datos, **Mongoose** para la interacción con la base de datos y **TypeScript** para el desarrollo de la aplicación.

## Descripción

El proyecto permite realizar operaciones CRUD sobre un modelo de productos que incluye los campos: `nombre`, `descripcion`, `precio`, `stock`, y `disponible`. El sistema está diseñado para facilitar la gestión de inventarios en una tienda.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **MongoDB**: Base de datos NoSQL para almacenamiento.
- **Mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.
- **TypeScript**: Superset de JavaScript que agrega tipado estático y otras características.

## Instalación

### Requisitos previos

Asegúrate de tener lo siguiente:

- **Node.js**: Instalado en tu máquina.
- **MongoDB**: Corriendo localmente o usando un servicio en la nube como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **TypeScript**: Instalado en tu entorno de desarrollo.


### Pasos para instalar

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>

2.  Accede al directorio del proyecto

3.  Instala las dependencias:

4.  Asegúrate de tener MongoDB corriendo localmente en mongodb://localhost:27017/tienda o   configura la conexión en config/mongo.ts para usar MongoDB Atlas o cualquier otra instancia remota.

   Ejecuta el servidor:


   ## Uso

1. Crear un producto
Puedes crear un nuevo producto enviando los datos de nombre, descripcion, precio, stock y disponible:


2. Obtener todos los productos


3. Obtener un producto por ID
Puedes obtener un producto específico usando su ID:

4. Actualizar un producto
Para actualizar un producto, solo necesitas su ID y los campos a modificar:

5. Eliminar un producto
Para eliminar un producto, pasa su ID:

## Conexión a la base de datos
Este proyecto utiliza MongoDB para el almacenamiento de los productos. Puedes conectarlo a una base de datos local o remota. La URI de conexión está configurada por defecto para MongoDB local:


## Descripción de archivos:
- config/mongo.ts: Contiene la configuración de la conexión a la base de datos MongoDB.

- producto.crud.ts: Implementa las funciones CRUD para manejar los productos.

- productos.model.ts: Define el esquema y el modelo del producto utilizando Mongoose.

- index.ts: Es el archivo principal que ejecuta el servidor y maneja las rutas.

- tsconfig.json: Configuración de TypeScript para compilar el código correctamente.







 

