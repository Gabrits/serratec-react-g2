import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../../services/cookie";
import AppButton from "../../components/AppButton";

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
        "Não há dados para serem exibidos no Feed!"
      )}
    </>
  );
}

export default Feed;
