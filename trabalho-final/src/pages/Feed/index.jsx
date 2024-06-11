import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../../services/cookie";
import AppButton from "../../components/AppButton";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { sendDeleteRequest } from "../../services/requests";
import { redirectToPath } from "../../services/app";

function Feed() {
  const [curtido, setCurtido] = useState(false);

  const handleClickCurtir = () => {
    setCurtido(!curtido);
  };
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

  const handleDelete = (id) => {
    sendDeleteRequest(id, "publicacoes").then(() =>
      setPublicacoes(publicacoes.filter((publicacao) => publicacao.id !== id))
    );
  };

  useEffect(getAllPosts, []);

  return (
    <>
      <div className="novaPostagem">
        <Button
          variant="primary"
          onClick={(e) => redirectToPath("/novoPost", e)}
        >
          Adicionar Postagem
        </Button>
      </div>

      {publicacoes.length > 0 ? (
        <ul className="containerGeral">
          {publicacoes.map((publicacao, index) => (
            <li key={index}>
              <div className="container">
                <div className="publicacao">
                  <div className="nomefoto">
                    <div className="fotoPerfil">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3lC0SfgqCcTGipFh64hddM6xgBYQj90wOA&s"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="nomePerfil">
                      <p>{publicacao.autor}</p>
                    </div>
                  </div>
                  <div className="imagem">
                    {publicacao.conteudo.split(":")[0] == "http" ||
                    publicacao.conteudo.split(":")[0] == "https" ? (
                      <img src={publicacao.conteudo} width={300} height={300} />
                    ) : (
                      <p>{publicacao.conteudo}</p>
                    )}
                  </div>
                  <ul className="emojis">
                    <li
                      className={curtido ? "curtir ativo" : "curtir"}
                      onClick={handleClickCurtir}
                    >
                      <FaHeart />
                    </li>
                    <li className="editar">
                      <Link to={`/feedMore/${publicacao.id}`}>
                        <FaPencilAlt />
                      </Link>
                    </li>
                    <li
                      onClick={() => handleDelete(publicacao.id)}
                      className="deletar"
                    >
                      <FaTrash />
                    </li>
                  </ul>
                </div>
              </div>
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
