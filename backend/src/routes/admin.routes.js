import { createAdmin, showAdmin } from "../controllers/admin.controller.js";

import express from "express";

//Configuración del router
export const adminRouter = express.Router();

// Creación de ruta para las peticiones de admin

adminRouter.post("/crear", createAdmin);
adminRouter.get("/obtener", showAdmin);