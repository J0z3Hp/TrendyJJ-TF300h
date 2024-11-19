import { request, response } from "express";
import { productModel } from "../models/product.model.js";

// peticiocn POST
export const postProduct = async (request, response) => {

    // LOGICA DE LA PETICION POST
    try { 
        const newProduct = await productModel.create(request.body); 
        return response.status(201).json({
            "mensaje": "El producto se creo correctamente",
            "datos": newProduct
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrio un error al crear un producto",
            "problem": error || error.message
        });
    }
}

// peticion GET 
export const getProduct = async (request, response) => {

    // LOGICA DE LA PETICION GET
    try {

        let products = await productModel.find();

        if(products.length === 0){
            return response.status(200).json({
                "mensaje": "No se encontraron productos en la base de datos"
            });
        }

        return response.status(200).json({
            "mensaje": "Esto son todos los productos encontrados",
            "datos": products
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrio un error al buscar los producto",
            "problem": error || error.message
        });
    }
}

// peticion PUT 
export const putProductById = async (request, response) => {

    // LOGICA DE LA PETICION PUT
    try {
        let idForPut = request.params.id; 
        let dataForUpdate = request.body; a

        const productUpdate = await productModel.findByIdAndUpdate(idForPut, dataForUpdate); 

        if(!productUpdate){
            return response.status(404).json({
                "mensaje": "Lo siento!!! No se encontró producto para actualizar"
            });
        }

        return response.status(200).json({
            "mensaje": "Se actualizo el producto correctamente",
            "datos": productUpdate
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrio un error al actualizar el producto",
            "problem": error || error.message
        });
    }
}

// peticion DELETE => 
export const deleteProductById = async (request, response) => {

    // LOGICA DE LA PETICION DELETE
    try {
        let idForDelete = request.params.id; 
        await productModel.findByIdAndDelete(idForDelete); 

        return response.status(200).json({
            "mensaje": "Producto eliminado exitosamente"
        });
        
    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrio un error al eliminar el producto",
            "problem": error || error.message
        });
    }
}