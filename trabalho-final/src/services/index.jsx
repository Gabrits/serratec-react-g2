// Resolvi centralizar aqui as funções que seriam usadas com frequência em todas as páginas da App

export function redirectToPath(path = "/", e = null) {
  if (e) e.preventDefault();
  window.location.href = path;
}
