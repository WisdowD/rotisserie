import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import usuarioRoutes from "./routes/usuario.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Servir arquivos estáticos da pasta /public
app.use(express.static(path.join(__dirname)));

// Rotas de API
app.use("/api", usuarioRoutes);

export default app;

