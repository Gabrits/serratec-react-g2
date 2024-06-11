import { Routes, Route } from "react-router-dom";

import Feed from "../pages/Feed";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import FeedMore from "../pages/FeedMore";
import Usuarios from "../pages/Usuarios";
import RouteComponent from "../components/RouteComponent";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/cadastrar" element={<Register />} />
      <Route
        path="/feed"
        element={
          <RouteComponent>
            <Feed />
          </RouteComponent>
        }
      />
      <Route
        path="/feedMore/:id"
        element={
          <RouteComponent>
            <FeedMore />
          </RouteComponent>
        }
      />
      <Route
        path="/usuarios"
        element={
          <RouteComponent>
            <Usuarios />
          </RouteComponent>
        }
      />
    </Routes>
  );
}

export default AppRouter;
