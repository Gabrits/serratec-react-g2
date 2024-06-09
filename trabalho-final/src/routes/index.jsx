import { Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Feed />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/cadastrar" element={<Register />} />
    </Routes>
  );
}

export default AppRouter;
