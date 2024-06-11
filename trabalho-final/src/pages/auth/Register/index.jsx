import { useState } from "react";
import AppButton from "../../../components/AppButton";
import { redirectToPath } from "../../../services/app";
import "./style.css";

function Register() {
  const [userFormData, setUserFormData] = useState({});

  return (
    <div className="register-page">
      {/* Formulário de Login */}
      
      <form className="register-form">
        <div className="custom-form-text-group">
          <div className="custom-form-name-text-group">
            <label className="custom-form-label" htmlFor="username">
              Nome:
            </label>
            <input
              className="custom-form-input"
              type="text"
              id="username"
              placeholder="James"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />

            <label className="custom-form-label" htmlFor="sobrenome">
              Sobrenome:
            </label>
            <input
              className="custom-form-input"
              type="text"
              id="sobrenome"
              placeholder="Marshall"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <label className="custom-form-label" htmlFor="sobrenome">
            Email:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="sobrenome"
            placeholder="nome@email.com"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <label className="custom-form-label" htmlFor="password">
            Senha:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="password"
            placeholder="exemplo"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <label className="custom-form-label" htmlFor="confirmPassword">
            Confirmação da senha:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="confirmPassword"
            placeholder="exemplo"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <label className="custom-form-label" htmlFor="birthDate">
            Data de nascimento:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="birthDate"
            placeholder="dd/mm/aaaa"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>

        {/* Agrupamento de buttons */}
        <div className="custom-form-button-group">
          {/* Entrar */}
          <AppButton onClick={(e) => handleSubmit(e)} type="primary">
            Enviar
          </AppButton>

          {/* Cadastrar-se */}
          <AppButton
            onClick={(e) => redirectToPath("/auth/login", e)}
            type="secondary"
          >
            Voltar
          </AppButton>
        </div>
      </form>
    </div>
  );
}

export default Register;
