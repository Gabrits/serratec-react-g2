import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
