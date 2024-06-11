import { useForm } from "react-hook-form";
import "./style.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../services/cookie";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Titulo Obrigatório")
    .max(40, "precisa de 40 caracteres!"),
  descricao: yup
    .string()
    .required("Descrição Obrigatório")
    .max(40, "precisa de 40 caracteres!"),
  conteudo: yup
    .string()
    .required("Conteudo Obrigatório")
    .max(40, "precisa de 500 caracteres!"),
});

const Posts = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => {
    const jwtToken = getCookie("jwtToken");
    if (jwtToken) {
      axios
        .post(
          "http://localhost:9090/publicacoes",
          { data },
          {
            headers: {
              Authorization: jwtToken,
            },
          }
        )
        .then(() => {
          console.log("Enviado com Sucesso");
          navigate("/");
        })
        .catch(() => console.log("Problemas de Requisição"));
    }
  };

  return (
    <>
      <main>
        <div className="card-post">
          <h1>Criar Postagem</h1>
          <hr />
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label htmlFor="titulo">Titulo</label>
              <input type="text" id="titulo" {...register("titulo")} />
              <p className="erro-message">{errors.titulo?.message}</p>

              <label htmlFor="descricao">Descrição da postagem</label>
              <input type="text" id="descricao" {...register("descricao")} />
              <p className="erro-message">{errors.descricao?.message}</p>

              <label htmlFor="conteudo">Conteúdo</label>
              <textarea
                id="conteudo"
                rows="10"
                cols="30"
                type="text"
                {...register("conteudo")}
              />
              <p className="erro-message">{errors.conteudo?.message}</p>
              <div className="btn-post">
                <button>Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Posts;
