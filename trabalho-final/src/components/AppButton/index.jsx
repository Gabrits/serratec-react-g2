import "./style.css";

/* Botão padrão que pode ser reutilizado na app */
function AppButton({
  onClick = () => console.log("Clicado!"),
  type = "app-primary-button",
  size = "default",
  children,
}) {
  /* Lógica que muda a cor do botão, dado o tipo escolhido */
  /* Só escolher entre "primary" ou "secondary"... O "primary" já é usado como padrão */
  switch (type) {
    case "secondary":
      type = "app-secondary-button";
      break;
    default:
      type = "app-primary-button";
      break;
  }

  /* Renderiza o botão e componentes filhos que estiverem contidos nele */
  return (
    <button className={`${type} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default AppButton;
