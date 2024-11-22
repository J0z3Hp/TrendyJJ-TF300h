import { createOrder, showOrderById, updatedOrder } from "../controllers/orders.controller.js";
// import { createOrder, showOrderById, updatedOrder  } from "../controllers/admin.controller.js";

import express from "express";
import { auth } from "../middleware/auth.js";

export const orderRouter = express.Router();

orderRouter.post("/crear", createOrder);
orderRouter.get("/obtener/:id", showOrderById);
orderRouter.put("/actualizar/:id", updatedOrder);