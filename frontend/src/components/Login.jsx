import { useEffect, useState } from "react";


export function Login({setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(e) {
  e.preventDefault();

  const usuarioLogueado = { email, password };

  fetch('http://localhost:1234/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuarioLogueado)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Credenciales inválidas');
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem("token", data.token)
    setToken(data.token)
  })
  .catch(error => {
    console.error(error);
  });
}

  return (
    <div className="login-container">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
    </div>
  );
}