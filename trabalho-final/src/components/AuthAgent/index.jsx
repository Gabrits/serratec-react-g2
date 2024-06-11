import React from "react";
import { getCookie } from "../../services/cookie";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function AuthAgent({ children }) {
  if (getCookie("jwtToken")) {
    return <>{children}</>;
  }

  return (
    <>
      <Container>
        Acesso não autorizado!
        <Link to={"/auth/login"}>Clique aqui para voltar.</Link>
      </Container>
    </>
  );
}

export default AuthAgent;
