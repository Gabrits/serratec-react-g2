import { getCookie } from "./cookie";
import axios from "axios";

export function sendGetRequest(
  endpoint,
  headers = { Authorization: getCookie("jwtToken") },
  url = "http://localhost:9090"
) {
  if (endpoint) {
    return axios
      .get(`${url}/${endpoint}`, { headers: headers })
      .then((response) => response)
      .catch((error) => {
        throw new Error(`Erro na requisição: ${error.message}`);
      });
  }
  throw new Error("Você deve fornecer um id e um endpoint.", {});
}

export function sendGetByIdRequest(
  id,
  endpoint,
  headers = { Authorization: getCookie("jwtToken") },
  url = "http://localhost:9090"
) {
  if ((id, endpoint)) {
    return axios
      .get(`${url}/${endpoint}/${id}`, { headers: headers })
      .then((response) => response)
      .catch((error) => {
        throw new Error(`Erro na requisição: ${error.message}`);
      });
  }
  throw new Error("Você deve fornecer um id e um endpoint.", {});
}

export function sendPostRequest(
  endpoint,
  body,
  headers = { Authorization: getCookie("jwtToken") },
  url = "http://localhost:9090"
) {
  if (endpoint) {
    return axios
      .post(`${url}/${endpoint}`, body, { headers: headers })
      .then((response) => response)
      .catch((error) => {
        throw new Error(`Erro na requisição: ${error.message}`);
      });
  }
  throw new Error("Você deve fornecer um id, um endpoint e um body.");
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
      .then((response) => response)
      .catch((error) => {
        throw new Error(`Erro na requisição: ${error.message}`);
      });
  }
  throw new Error("Você deve fornecer um id e um endpoint.");
}
