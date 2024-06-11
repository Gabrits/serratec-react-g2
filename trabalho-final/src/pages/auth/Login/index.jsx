import { useState } from "react";
import { redirectToPath, toggleState } from "../../../services/app";
import AppButton from "../../../components/AppButton";
import AppRevealButton from "../../../components/AppRevealButton";
import AppSectionDivider from "../../../components/AppSectionDivider";
import "./style.css";
import axios from "axios";
import { setCookie } from "../../../services/cookie";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [revealPassword, setRevealPassword] = useState(false);

  const handleRevealPassword = (e) => {
    toggleState(revealPassword, setRevealPassword, e);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9090/login", user)
      .then((response) => {
        setCookie("jwtToken", response.headers.authorization);
        console.log(response.headers.authorization);
        redirectToPath("/feed");
      })
      .catch((error) => {
        setCookie("jwtToken", "");
        console.log(
          `${
            error.response.status == 401
              ? "Acesso negado para as credenciais fornecidas."
              : error.message
          }`
        );
      });
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
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <label className="custom-form-label custom-password-label" htmlFor="password">
            Senha:
            <AppRevealButton
              onClick={(e) => handleRevealPassword(e)}
              reveal={revealPassword}
            >
              {revealPassword ? "Esconder" : "Revelar"}
            </AppRevealButton>
          </label>
          <input
            className="custom-form-input"
            type={revealPassword ? "text" : "password"}
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        {/* Agrupamento de buttons */}
        <div className="custom-form-button-group">
          {/* Entrar */}
          <AppButton onClick={(e) => handleLogin(e)} type="primary">
            Entrar
          </AppButton>

          {/* Divisor */}
          <AppSectionDivider text="ou" />

          {/* Cadastrar-se */}
          <AppButton
            onClick={(e) => redirectToPath("/auth/cadastrar", e)}
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
