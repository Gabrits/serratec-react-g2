import { useState } from "react";
import { redirectToPath } from "../../../services";
import AppButton from "../../../components/AppButton";
import AppSectionDivider from "../../../components/AppSectionDivider";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState("false");

  const handleRevealPassword = (e) => {
    e.preventDefault();
    setRevealPassword(!revealPassword);
  };

  return (
    <div className="login-page">
      {/* Formulário de Login */}
      <form className="login-form">
        <div className="custom-form-text-group">
          <label className="custom-form-label" htmlFor="username">
            Usuário:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="custom-form-label" htmlFor="password">
            Senha:{" "}
            <AppButton
              className="custom-form-password-reveal-text"
              onClick={(e) => handleRevealPassword(e)}
              size="compact"
            >
              {revealPassword ? "Esconder" : "Revelar"}
            </AppButton>
          </label>
          <input
            className="custom-form-input"
            type={revealPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Agrupamento de buttons */}
        <div className="custom-form-button-group">
          {/* Entrar */}
          <AppButton
            onClick={(e) => {
              e.preventDefault();
              console.log("Teste!");
            }}
            type="primary"
          >
            Entrar
          </AppButton>

          {/* Divisor */}
          <AppSectionDivider text="ou" />

          {/* Cadastrar-se */}
          <AppButton
            onClick={(e) => redirectToPath("cadastrar", e)}
            type="secondary"
          >
            Cadastre-se
          </AppButton>
        </div>
      </form>
    </div>
  );
}

export default Login;
