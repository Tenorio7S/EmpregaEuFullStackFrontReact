import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Implementar lógica de login aqui
    console.log('Efetuando login com:', formData.email, formData.senha);
  };

  const handleEsqueciSenha = () => {
    // Implementar lógica para recuperar senha
    console.log('Esqueci a senha:', formData.email);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Digite seu e-mail"
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

      {/* Botões */}
      <div className="form-group">
        <button className="primary-button" onClick={handleLogin}>
          Login
        </button>
      </div>

      <div className="form-group">
        <button className="secondary-button" onClick={handleEsqueciSenha}>
          Esqueci a Senha
        </button>
      </div>
    </div>
  );
};

export default Login;
