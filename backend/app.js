import express from "express";
import dotenv from "dotenv"; 
import { connectionMongo } from "./src/config/dataBase.js"; 
import { productRouter } from "./src/routes/product.routes.js";
import { usersRouter } from "./src/routes/user.routes.js";
import { loginUserRouter } from "./src/routes/loginUser.routes.js";
import { adminRouter } from "./src/routes/admin.routes.js";
import { orderRouter } from "./src/routes/orders.routes.js";
 

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
app.use("/administradores", adminRouter);
app.use("/ordenes", orderRouter);


// Ejecutar el servidor en nuestro computador
app.listen(port, () => {
    console.log("El servidor se esta ejecutando coreectamente, en el puerto", port);
});  