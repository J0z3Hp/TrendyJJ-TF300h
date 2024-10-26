// EN ESTE ARCHIVO, ESCRIBIMOS EL CODIGÓ PARA LA CONEXIÓN CON LA BASE DE DATOS 

// 1. Importar las dependecias que se necesitan, siempre
import mongoose from "mongoose";

// 2. Creamos una función para concetar la base de datos
// Función asincrónica -> se usa para cuando necesitemos esperar una respuesta 

export async function connectionMongo(){
    // Debemos controlar los errores -> boque try - catch
    // try -> gestiona cuando las respuesta es positiva 
    // catch -> atrapa los errores

    try {
        // Concectar base de datos 
        await mongoose.connect(process.env.DB_URL,{});
        console.log("Conexion exitosa con la base de datos");
    } catch (error) {
        console.error("Un error de conexion: " + error); // console.error(""); -> es para que nos muestre en la consola si hay un error
    }
}