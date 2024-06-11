import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { sendPostRequest } from "../../services/requests";
import { redirectToPath } from "../../services/app";

const Posts = () => {
  const [novaPublicacao, setNovaPublicacao] = useState({ autor: { id: 54 } });

  const sendNewPost = (e) => {
    e.preventDefault();

    const post = {
      conteudo: novaPublicacao.conteudo,
      autor: novaPublicacao.autor,
    };

    console.log(post);

    sendPostRequest("publicacoes", post);
    redirectToPath("/feed", e);
  };

  return (
    <>
      <Container>
        <div className="card-post">
          <h1>Criar Postagem</h1>
          <hr />
          <form className="card-post-form">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              id="titulo"
              onChange={(e) => {
                setNovaPublicacao({
                  ...novaPublicacao,
                  titulo: e.target.value,
                });
              }}
            />

            <label htmlFor="descricao">Descrição da postagem</label>
            <input
              type="text"
              id="descricao"
              onChange={(e) =>
                setNovaPublicacao({
                  ...novaPublicacao,
                  descricao: e.target.value,
                })
              }
            />

            <label htmlFor="conteudo">Conteúdo</label>
            <textarea
              id="conteudo"
              rows="10"
              cols="30"
              type="text"
              onChange={(e) =>
                setNovaPublicacao({
                  ...novaPublicacao,
                  conteudo: e.target.value,
                })
              }
            />

            <button onClick={(e) => sendNewPost(e)}>Enviar</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Posts;
