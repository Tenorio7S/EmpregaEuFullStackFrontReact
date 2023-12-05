import express from "express";
import axios from "axios";
import Cadastro from "./src/models/cadastro.js";

const app = express();
const baseURL = "http://localhost:3000";

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000!");
});

// Listar
app.get("/", (req, res) => {
  res.status(200).send("Inicio Cadastro!");
});

app.get("/cadastros", async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/cadastros`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro ao buscar cadastros:", error);
    res.status(500).json("Erro ao buscar cadastros.");
  }
});

// Detalhes
app.get("/cadastros/:id", async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/cadastros/${req.params.id}`);
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(404).send("Cadastro não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar cadastro por ID:", error);
    res.status(500).send("Erro ao buscar cadastro por ID.");
  }
});

// Adicionar
app.post("/cadastros", async (req, res) => {
  try {
    const response = await axios.post(`${baseURL}/cadastros`, req.body);
    res.status(201).json({
      message: "Cadastro realizado com sucesso!",
      cadastro: response.data,
    });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json("Erro ao cadastrar usuário.");
  }
});

// Atualizar
app.put("/cadastros/:id", async (req, res) => {
  try {
    const response = await axios.put(`${baseURL}/cadastros/${req.params.id}`, req.body);
    res.status(200).json({ message: "Cadastro atualizado com sucesso!", cadastro: response.data });
  } catch (error) {
    console.error("Erro ao atualizar cadastro:", error);
    res.status(500).send("Erro ao atualizar cadastro.");
  }
});

// Deletar
app.delete("/cadastros/:id", async (req, res) => {
  try {
    await axios.delete(`${baseURL}/cadastros/${req.params.id}`);
    res.status(200).json("Cadastro deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar cadastro:", error);
    res.status(500).send("Erro ao deletar cadastro.");
  }
});

export default app;
