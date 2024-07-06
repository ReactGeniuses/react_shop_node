import express from "express";
import cors from "cors";
//importamos la conexión a la DB
import db from "./DataBase/db.js";
//importamos nuestro enrutador
import productsRoutes from "./Routes/Routes.js";
import categoryRoutes from "./Routes/RouteCategory.js"
import salesRoutes from './Routes/SalesRoutes.js';
import AccountRoutes from './Routes/AccountRoute.js';
import UsuarioRoute from './Routes/UsuarioRoute.js';
import DireccionModel from "./Routes/DireccionRoute.js";
import WishlistRoutes from "./Routes/WishlistRoutes.js";
import CardRoute from "./Routes/CardRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", productsRoutes);
app.use("/category", categoryRoutes);
app.use("/sales", salesRoutes);
app.use("/account", AccountRoutes);
app.use("/usuario", UsuarioRoute);
app.use("/direccion", DireccionModel);
app.use("/wish", WishlistRoutes);
app.use("/card", CardRoute);

const PORT = process.env.PORT || 8000; // Heroku proporciona el puerto a través de process.env.PORT
app.listen(PORT, () => {
  console.log(`Server UP running on http://localhost:${PORT}/`);
});

// Asegúrate de que las configuraciones de la base de datos estén adecuadamente manejadas según las variables de entorno de Heroku
try {
  await db.authenticate();
  console.log("Conexión exitosa a la DB");
} catch (error) {
  console.error(`Error de conexión a la DB: ${error}`);
}