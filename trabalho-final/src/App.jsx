import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
