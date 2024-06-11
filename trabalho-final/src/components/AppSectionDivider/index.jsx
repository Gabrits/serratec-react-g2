import "./style.css";

/* 
    Divisor de sessões estilizado que pode ser reutilizado na App
    (o mesmo que usei pra fazer o "ou" na tela de Login).

    Esse componente aceita qualquer tipo de texto, aí é só usar uma 
    prop "text" no momento que for usar o componente. Por padrão, ele
    utilizará o texto "Título".
*/
function AppSectionDivider({ text = "Título" }) {
  return (
    <ul  className="custom-divider">
      <li className="custom-divider-line" />
      <li>
        <span className="custom-divider-text">{text}</span>
      </li>
      <li className="custom-divider-line" />
    </ul>
  );
}

export default AppSectionDivider;
