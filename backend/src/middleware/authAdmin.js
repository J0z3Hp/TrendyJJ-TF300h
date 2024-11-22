import verifyToken from "../lib/jwt.jts";



export function authAdmin(required) {

    return async (request, response, next) => {

        let token = request.headers ["authorization"];
        console.log("token obtenido de la cabecera" + " " + token);

        if(!token){
            return response.status(401).json({
                mensaje: "No se encontro Token, permiso denegado"
            });
        }

        token = token.split(" ")[1];
        console.log("token despues de separarlo del barer" + token);

        try {
            const decoded = await verifyToken(token);
            console.log("token decodificado", decoded);
        } catch (error) {
            
        }

    }
}