import React, { useState, useEffect } from "react";
import { getCookie } from "../../services/cookie";
import axios from "axios";
import './style.css';

function Usuarios() {
  const [users, setUsers] = useState([]);

  const ObterUsuarios = () => {
    const jwtToken = getCookie("jwtToken");

    if (jwtToken) {
      axios
        .get("http://localhost:9090/usuarios", {
          headers: {
            Authorization: jwtToken,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
        })
        .catch((error) => error.message);
    }
  };

  useEffect(ObterUsuarios, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="src/assets/logo.png" width={175} height={175} />
        </div>
      </div>
      <div className="linhaSeparacao">
        <img
          src="https://www.freepnglogos.com/uploads/line-png/long-lines-straight-line-transparent-7.png"
          height={50}
          width={700}
        />
      </div>

      <div className='listar'>
        <h1>Lista de Usuários</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.nome}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Usuarios;
