import { useState } from "react";
import "./style.css";
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
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          {logado && (
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Sair
              </button>
            </li>
          )}
        </ul>
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
