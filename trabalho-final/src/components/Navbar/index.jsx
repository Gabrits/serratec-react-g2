import "./styleNav.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="src/assets/logo.png" width={175} height={175} />
        </div>
        <ul className="nav-links">
          <li>
            <a href="">
              <Link to={"/feed"}>Feed</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to={""}>Usuários</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to={"/auth/login"}>Sair</Link>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
