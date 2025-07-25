import { generateToken } from "../utils/jwt.js";

const default_user = {
  id: 1,
  email: "admin@admin.com",
  password: "password123",
};
const login = async (req, res) => {
  const { email, password } = req.body;

  // Verificamos que el usuario y la contraseña sean correctos
  if (email === default_user.email && password === default_user.password) {
    const token = generateToken(default_user);
    return res.json({ token });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
};

export default { login };
