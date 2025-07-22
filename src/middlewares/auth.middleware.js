import { verifyToken } from "../utils/jwt.js";

export default function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
    
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado. Debe autenticarse" });
  }

  const { valid, data, message } = verifyToken(token); // Verify token devuelve un objeto con valid, data y message
  
  // Si el token no es válido, respondemos con un error
  if (!valid) {
    return res.status(401).json({ message: "Token inválido", error: message });
  }

  // Si es válido, continuamos con la solicitud
  req.user = data; // Guardamos los datos del usuario en el objeto de solicitud
  next();
}
