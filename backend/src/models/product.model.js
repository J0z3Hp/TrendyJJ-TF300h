import mongoose from "mongoose";

// SCHEMA de los productos(camisetas)
const productSchema = new mongoose.Schema({
    image:{type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true, enum: ["hombre", "mujer"]},
    color: {type: String, required: true},
    talla: {type: String, required: true},
    price:{type: String, required: true},
    stock: {type: Number, required: true}
});

export const productModel = mongoose.model("product", productSchema);