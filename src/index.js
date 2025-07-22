import express from "express";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import { envs } from "./config/envs.js";

//settings
const app = express();
app.set("PORT", envs.port);

// middlewares
app.use(express.json()); // body-parser ya viene incluido en express
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, "public")));

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);

// Middleware para rutas no encontradas (404) - DEBE IR AL FINAL
app.use(notFoundMiddleware);


//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
