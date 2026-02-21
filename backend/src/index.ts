import "dotenv/config";

import express from "express";
import { taskRoutes } from "./routes/taskRoutes";

// Cria a instância principal da aplicação
const app = express();

//Middleware para interpretar requisições no JSON
app.use(express.json());

app.get("/", (req, res) => {
	res.send(" API List está rodando! Acesse /task para usar.");
});

app. use("/tasks", taskRoutes);

// Inicializa o servidor
app.listen(3000, () => {
	console.log("Servidor rodando em http://localhost:3000");
});
