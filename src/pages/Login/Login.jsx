import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode adicionar validações e lógica de login
    if (cpf && password) {
      // Se as credenciais estiverem corretas, redireciona para o controle
      navigate('/controle');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
