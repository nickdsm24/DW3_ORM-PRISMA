import "dotenv/config";

import express from "express";
import path from "path";
import { taskRoutes } from "./routes/taskRoutes";

// Cria a instância principal da aplicação
const app = express();

app.use(express.urlencoded({extended:true}));
//Middleware para interpretar requisições no JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "views", "index.html"));
});

app. use("/tasks", taskRoutes);

// Inicializa o servidor
app.listen(3000, () => {
	console.log("Servidor rodando em http://localhost:3000");
});
