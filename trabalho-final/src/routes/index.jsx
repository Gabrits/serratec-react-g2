import { Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import FeedMore from "../pages/FeedMore";
import Usuarios from "../pages/Usuarios";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/auth/cadastrar" element={<Register />} />
      <Route path="/feedMore/:id" element={<FeedMore />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  );
}

export default AppRouter;
