import React from "react";
import { redirectToPath } from "../../../services";

function Login() {
  return (
    <form>
      <label htmlFor="username"></label>
      <input type="text" id="username" />

      <label htmlFor="password"></label>
      <input type="text" id="password" />

      <button type="submit">Entrar</button>
      <button onClick={(e) => redirectToPath("cadastrar", e)}>Cadastrar</button>
    </form>
  );
}

export default Login;
