import { getCookie } from "./cookie";
import axios from "axios";

function sendDefaultJson(message, response) {
  return { message: message, response: response };
}

export function sendDeleteRequest(
  id,
  endpoint,
  headers = { Authorization: getCookie("jwtToken") },
  url = "http://localhost:9090"
) {
  if (id && endpoint) {
    return axios
      .delete(`${url}/${endpoint}/${id}`, { headers: headers })
      .then((response) => sendDefaultJson("Deletado com sucesso!", response))
      .catch((error) => sendDefaultJson("Não foi possível deletar.", error));
  }
  return sendDefaultJson("Você deve fornecer um id.", {});
}
