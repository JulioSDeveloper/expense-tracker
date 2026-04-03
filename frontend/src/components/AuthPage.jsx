import { useState } from "react";

export function AuthPage({ setToken ,setUsername}) {
  const [isLogin, setisLogin] = useState(true);
  const [usernameInput, setUsernameInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // 🔹 LOGIN
    if (isLogin) {
      const user = { email, password };

      fetch("http://localhost:1234/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Credenciales inválidas");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data)
          localStorage.setItem("token", data.token);
          localStorage.setItem("username",data.user.username);
          
          setToken(data.token);
          setUsername(data.user.username)

          // limpiar inputs
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.error(error);
        });
    } 
    
    // 🔹 REGISTER + LOGIN AUTOMÁTICO
    else {
      const user = { 
        username:usernameInput, 
        email, 
        password };
     console.log("REGISTER DATA:", user)
      fetch("http://localhost:1234/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al registrarse");
          }
          return response.json();
        })
        .then(() => {
          // 🔥 LOGIN AUTOMÁTICO
          return fetch("http://localhost:1234/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }), // 👈 SOLO email + password
          });
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al hacer login automático");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username",data.user.username);
          setUsername(data.user.username)
          setToken(data.token);

          // limpiar inputs
          setUsernameInput("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        
        {!isLogin && (
          <input
            type="text"
            placeholder="Usuario"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {isLogin ? "Iniciar sesión" : "Registrarse"}
        </button>

        <p className="toggle-text">
          {isLogin ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?"}
          <span onClick={() => setisLogin(!isLogin)}>
            {isLogin ? " Registrate" : " Iniciá sesión"}
          </span>
        </p>

      </form>
    </div>
  );
}