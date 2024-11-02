// 1. Importar las dependencias

import mongoose from "mongoose";

// 2. crearnos el esquema de datos 

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true}, // unique -> que no se pueda repetir, que sea unico 
    password: {type: String, required: true}
});

// 3. Definir nuestro modelo 

export const userModel = mongoose.model("user", userSchema);