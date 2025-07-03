import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Cadastro from "./pages/Cadastro";
import ConfirmarPresenca from "./pages/ConfirmarPresenca";
import DetalhesEvento from "./pages/DetalhesEvento";
import HomeOrganizador from "./pages/HomeOrganizador";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/organizador" element={<HomeOrganizador />} />
        <Route path="/evento/:id" element={<DetalhesEvento />} />
        <Route path="/confirmar/:id" element={<ConfirmarPresenca />} />
      </Routes>
    </Router>
  );
}
