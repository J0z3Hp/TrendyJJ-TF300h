// El archivo app.js -> es el archivo de ejecucion de nustro aplicativo web
// Acá vamos a configurar nuestro servido con EXPRESS y vamos a gestionar todo lo relacioanado con la logica de negocio -> conexion base de datos, peticiones, respuestas

// 1. IMPORTAR LAS DEPENDENCIAS Y MODULOS QUE NECESITAMOS, PARA TODAS LA DEPENCIAS QUE QUEREMOS USAR SIEMPRE TENEMOS QUE IMPORTARLAS 
import express from "express"; // ECMAS 6
import dotenv from "dotenv"; // Dependencia para manjar variable de entorno
import { connectionMongo } from "./src/config/dataBase.js"; // siempre agragar el .js al archivo 
import { adminRouter } from "./src/routes/admin.routes.js";
import { orderRouter } from "./src/routes/orders.routes.js";

// 2. Configurar el uso de nuestro servidor 
const app = express();
dotenv.config(); // Configurando para poder usar variable de entorno
connectionMongo (); // Estamos invocando nuestra importacion "connectionMongo"

app.use(express.json());

app.use("/administradores", adminRouter);
app.use("/ordenes", orderRouter);



const port = process.env.PORT // 3000, 6000, 9000 son los puertos que generalmente se utlizan para tener un servido local en nustro equipo 




// 3. Ejecutar el servidor en nuestro computador
app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando coreectamente, en el puerto", port);
});