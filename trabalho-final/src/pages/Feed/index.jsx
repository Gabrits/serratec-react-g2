import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../../services/cookie";
import AppButton from "../../components/AppButton";
import './style.css'

function Feed() {
  const [publicacoes, setPublicacoes] = useState([]);

  const getAllPosts = () => {
    const jwtToken = getCookie("jwtToken");

    if (jwtToken) {
      axios
        .get("http://localhost:9090/publicacoes", {
          headers: {
            Authorization: jwtToken,
          },
        })
        .then((response) => {
          console.log(response.data);
          setPublicacoes(response.data);
        })
        .catch((error) => error.message);
    }
  };

  useEffect(getAllPosts, []);

  return (
    <>
      {publicacoes.length > 0 ? (
        <ul>
          {publicacoes.map((publicacao, index) => (
            <li key={index}>
              <p>Autor: {publicacao.autor}</p>
              <p>Conteúdo: {publicacao.conteudo}</p>
              <p>Data da publicação: {publicacao.dataCriacao}</p>
              <br />
            </li>
          ))}
        </ul>
      ) : (
        // "Não há dados para serem exibidos no Feed!"
        ""
      )}

      <div className="navbar">
          <div className="logo">
            <img src='src/assets/logo.png' width={175} height={175}/>
          </div>
      </div>
          <div className="linhaSeparacao">
            <img src="https://www.freepnglogos.com/uploads/line-png/long-lines-straight-line-transparent-7.png" height={50} width={700}/>
          </div>
          
    </>
  );
}

export default Feed;
