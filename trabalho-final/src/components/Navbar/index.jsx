import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [logado, setLogado] = useState(true);

  const handleLogout = () => {
    setLogado(false);
    console.log("Usuário desconectado");
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="src/assets/logo.png" width={175} height={175} />
        </div>
        <div className="nav-links">
          <Link to={"/"}>Feed</Link>
          <Link to={""}>Usuários</Link>
          <Link to={""}>Sair</Link>
        </div>
      </div>
      <div className="linhaSeparacao">
        <img
          src="https://www.freepnglogos.com/uploads/line-png/long-lines-straight-line-transparent-7.png"
          height={50}
          width={700}
        />
      </div>
    </>
  );
}

export default NavBar;
