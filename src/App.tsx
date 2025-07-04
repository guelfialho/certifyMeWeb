import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EventosProvider } from "./context/EventosContext";
import { AuthProvider } from "./context/AuthContext";

import Inicial from "./pages/Inicial";
import Cadastro from "./pages/Cadastro";
import ConfirmarPresenca from "./pages/ConfirmarPresenca";
import DetalhesEvento from "./pages/DetalhesEvento";
import HomeOrganizador from "./pages/HomeOrganizador";
import Login from "./pages/Login";
import RotaPrivada from "./components/RotaPrivada";

export default function App() {
  return (
    <AuthProvider>
      <EventosProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route
              path="/organizador"
              element={
                <RotaPrivada>
                  <HomeOrganizador />
                </RotaPrivada>
              }
            />
            <Route
              path="/evento/:id"
              element={
                <RotaPrivada>
                  <DetalhesEvento />
                </RotaPrivada>
              }
            />
            <Route path="/confirmar/:id" element={<ConfirmarPresenca />} />
          </Routes>
        </Router>
      </EventosProvider>
    </AuthProvider>
  );
}
