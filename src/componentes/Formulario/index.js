import React, { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const enviarRequisicao = async (method) => {
    try {
      // Verificar se as senhas coincidem antes de enviar a requisição
      if (formData.senha !== formData.confirmarSenha) {
        alert("As senhas não coincidem. Por favor, verifique.");
        return;
      }

      const response = await fetch("/cadastro", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const message = await response.text();
      alert(message);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const publicarCadastro = (e) => {
    e.preventDefault();
    enviarRequisicao("POST");
  };

  const atualizarCadastro = (e) => {
    e.preventDefault();
    enviarRequisicao("PUT");
  };

  const deletarCadastro = (e) => {
    e.preventDefault();
    enviarRequisicao("DELETE");
  };

  return (
    <div className="form-container">
      <h1 className="primary-heading">Faça seu cadastro</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            placeholder="Seu nome completo"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Número de Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            placeholder="(99) 9 9999-9999"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Endereço de E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="seuemail@gmail.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            placeholder="Digite sua senha"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            placeholder="Confirme sua senha"
            onChange={handleChange}
            required
          />
        </div>

        {/* Botões */}
        
        <div className="form-group">
          <button className="secondary-button" onClick={publicarCadastro}>
            Publicar
          </button>
          <button className="secondary-button" onClick={atualizarCadastro}>
            Atualizar
          </button>
          <button className="secondary-button" onClick={deletarCadastro}>
            Deletar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
