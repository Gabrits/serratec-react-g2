import { Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import NotFound from "../pages/NotFound";
import Login from "../pages/Authentication/Login";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Feed />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/authentication/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;