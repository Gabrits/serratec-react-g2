import { useState } from "react";
import AppButton from "../../../components/AppButton";
import { toggleState, redirectToPath } from "../../../services/app";
import "./style.css";
import AppRevealButton from "../../../components/AppRevealButton";

function Register() {
  const [userFormData, setUserFormData] = useState({});
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealPasswordConfirmation, setRevealPasswordConfirmation] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userFormData);
  };

  const handleRevealPassword = (state, setState, e) => {
    toggleState(state, setState, e);
  };

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
              placeholder="Erik"
              onChange={(e) =>
                setUserFormData({ ...userFormData, nome: e.target.value })
              }
            />

            <label className="custom-form-label" htmlFor="sobrenome">
              Sobrenome:
            </label>
            <input
              className="custom-form-input"
              type="text"
              id="sobrenome"
              placeholder="Romanelli"
              onChange={(e) =>
                setUserFormData({ ...userFormData, sobrenome: e.target.value })
              }
            />
          </div>

          <label className="custom-form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="email"
            placeholder="nome@email.com"
            onChange={(e) =>
              setUserFormData({ ...userFormData, email: e.target.value })
            }
          />

          <label className="custom-form-label custom-password-label" htmlFor="password">
            Senha:
            <AppRevealButton
              onClick={(e) =>
                handleRevealPassword(revealPassword, setRevealPassword, e)
              }
              reveal={revealPassword}
            />
          </label>
          <input
            className="custom-form-input"
            type={revealPassword ? "text" : "password"}
            id="password"
            placeholder="exemplo"
            onChange={(e) =>
              setUserFormData({ ...userFormData, senha: e.target.value })
            }
          />

          <label className="custom-form-label custom-password-label" htmlFor="confirmPassword">
            Confirmação:
            <AppRevealButton
              onClick={(e) =>
                handleRevealPassword(
                  revealPasswordConfirmation,
                  setRevealPasswordConfirmation,
                  e
                )
              }
              reveal={revealPasswordConfirmation}
            />
          </label>
          <input
            className="custom-form-input"
            type={revealPasswordConfirmation ? "text" : "password"}
            id="confirmPassword"
            placeholder="exemplo"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                confirmaSenha: e.target.value,
              })
            }
          />

          <label className="custom-form-label" htmlFor="birthDate">
            Nascimento:
          </label>
          <input
            className="custom-form-input"
            type="text"
            id="birthDate"
            placeholder="dd/mm/aaaa"
            onChange={(e) =>
              setUserFormData({
                ...userFormData,
                dataNascimento: e.target.value,
              })
            }
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
