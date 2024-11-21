import express from "express";
import dotenv from "dotenv"; 
import { connectionMongo } from "./src/config/dataBase.js"; 
import { productRouter } from "./src/routes/product.routes.js";
import { usersRouter } from "./src/routes/user.routes.js";
import { loginUserRouter } from "./src/routes/loginUser.routes.js";

<<<<<<< HEAD
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
=======
// Configurar el uso de nuestro servidor 
const app = express();
dotenv.config(); 
connectionMongo (); 
const port = process.env.PORT 

//RUTAS QUE DEBE UTILIZAR 
app.use(express.json()); 
app.use("/productos", productRouter);
app.use("/usuarios", usersRouter);
app.use("/iniciarSesion", loginUserRouter);


// Ejecutar el servidor en nuestro computador
app.listen(port, () => {
>>>>>>> subrama-Jose
    console.log("El servidor se esta ejecutando coreectamente, en el puerto", port);
});