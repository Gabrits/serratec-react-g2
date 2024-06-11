import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../../services/cookie";
import AppButton from "../../components/AppButton";
import './style.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiHeart } from "react-icons/hi";

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
      
      <div className="container">
        
      <div className="publicacao">
          <div className="nomefoto">
            <div className="fotoPerfil">
              <img src="https://i.pinimg.com/474x/fa/ba/54/faba5498b3167071dc93e22f3ce1e22a.jpg" alt="" width={50} height={50}/>
            </div>

            <div className="nomePerfil">
              <p>{publicacao.autor}</p>
            </div>
          </div>

          <div className="imagem">  
            <img src={publicacao.conteudo} width={300} height={300}/>
          </div>

          <div className="curtirComentarEditar">

            <div className="curtir">
            <HiHeart />
            </div>

            {/* <div className="comentar">
              <img src="src/assets/comentarioBranco.png" width={30} height={39} />
            </div> */}
            
            <div className="editar">
              <Link to={`/feedMore/${publicacao.id}`}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/White_pencil_icon.svg/800px-White_pencil_icon.svg.png" width={20} height={40}/>
              </Link>
            </div>
          </div>
          {/* <div className="descricao">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, minus fugiat? Quos quo quibusdam, laudantium iure ducimus consequuntur quidem culpa sint, odio error fugit nulla architecto, atque esse aut maxime.</p>
          </div> */}
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