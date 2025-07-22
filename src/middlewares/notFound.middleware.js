/**
 * Middleware para manejar rutas no encontradas (404)
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const notFoundMiddleware = (req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    message: `La ruta ${req.originalUrl} no existe en este servidor`,
    status: 404
  });
};

export default notFoundMiddleware;
