import { useEffect, useState } from "react";
import "./style.css";

function AppRevealButton({
  onClick = () => console.log("Teste!"),
  reveal = false,
}) {
  return (
    <>
      <button
        className={`app-reveal-button ${reveal ? "" : "closed"}`}
        onClick={onClick}
      >
        <i className={`${reveal ? "fa-regular" : "fa-solid"} fa-eye`}></i>
      </button>
    </>
  );
}

export default AppRevealButton;
