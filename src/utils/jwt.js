import jwt from "jsonwebtoken";
import { envs } from "../config/envs.js";

const { jwt_secret } = envs.secrets;

export const generateToken = (userData) => {
  const user = {
    email: userData.email,
    password: userData.password,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(user, jwt_secret, options);
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwt_secret);
    return { valid: true, data: decoded };
  } catch (error) {
    return { valid: false, message: error.message };
  }
}   