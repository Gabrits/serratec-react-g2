/* Operações com Cookie */

/* Define um valor para um cookie */
export function setCookie(name, value, hours = 0.5) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 3600 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

/* Retorna o valor de um cookie pelo nome */
export function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}

/* Remove um cookie */
export function deleteCookie(name) {
  document.cookie = name + `=; expires=${new Date()}; path=/;`;
}
