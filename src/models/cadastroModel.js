import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  numeroPessoas: {
    type: Number,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

const Cadastro = mongoose.model("Cadastro", cadastroSchema);

export default Cadastro;
