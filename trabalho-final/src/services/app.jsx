/* 
  Resolvi centralizar aqui as funções que seriam usadas com frequência 
  em todas as páginas da App
*/

/* Usado para redirecionar o usuário para outro caminho */
export function redirectToPath(path = "/", e = null) {
  if (e) e.preventDefault();
  window.location.href = path;
}

/* Usado para inverter o valor booleano de um useState */
export function toggleState(state, setState, e = null) {
  if (e) e.preventDefault();
  setState(!state);
}