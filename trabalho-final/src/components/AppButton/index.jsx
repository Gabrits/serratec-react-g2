import "./style.css";

/* Botão padrão que pode ser reutilizado na app */
function AppButton({
  onClick = () => console.log("Clicado!"),
  type = "app-primary-button",
  children,
}) {
  /* Lógica que muda a cor do botão, dado o tipo escolhido */
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
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default AppButton;
