import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getCookie } from "../../services/cookie";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../FeedMore/style.css";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../../components/Footer";

const FeedMore = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  const [dados, setDados] = useState({});

  const getPublications = () => {
    const jwtToken = getCookie("jwtToken");

    if (jwtToken) {
      axios
        .get(`http://localhost:9090/publicacoes/${id}`, {
          headers: {
            Authorization: jwtToken,
          },
        })
        .then((response) => {
          setDados(response.data);
          console.log("Requisitado com Sucesso");
        })
        .catch(() => console.log("Erro na Requisição"));
    }
  };
  useEffect(() => {
    getPublications();
  }, []);

  const attPost = () => {
    const jwtToken = getCookie("jwtToken");
    axios
      .put(
        `http://localhost:9090/publicacoes/${id}`,
        { conteudo: dados.conteudo },
        {
          headers: {
            Authorization: jwtToken,
          },
        }
      )
      .then(() => {
        console.log("Enviado com Sucesso");
        navigate("/feed");
      })
      .catch(() => console.log("Problemas de Requisição"));
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="card-edition">
        <Card.Body className="teste">
          {/* <form onSubmit={handleSubmit(attPost)}> */}
          <form
            onSubmit={function handleSubmit(e) {
              e.preventDefault();
              attPost();
            }}
          >
            <Form.Group className="mb-3">
              <Link to={"/feed"}>
                <IoIosArrowBack />
              </Link>
              <h3 className="tit-pub">Publicação</h3>
              <Form.Label>Autor</Form.Label>
              <Form.Control className="mb-3" value={dados.autor} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="">Data de Criação</label>
              <Form.Control
                className="mb-3"
                value={dados.dataCriacao}
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={dados.conteudo}
                onChange={(e) => {
                  setDados({ ...dados, conteudo: e.target.value });
                  console.log(e.target.value);
                }}
              />
            </Form.Group>
            <div className="teste">
              <Button variant="primary" type="submit" className="btn-enviar">
                Enviar Formulário
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default FeedMore;
