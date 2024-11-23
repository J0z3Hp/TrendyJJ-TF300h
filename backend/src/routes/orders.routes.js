import { createOrder, showOrderById, updatedOrder } from "../controllers/orders.controller.js";
import express from "express";

export const orderRouter = express.Router();

orderRouter.post("/crear", createOrder);
orderRouter.get("/obtener/:id", showOrderById);
orderRouter.put("/actualizar/:id", updatedOrder);