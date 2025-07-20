import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Cabecalho() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <h2>CertifyMe</h2>
      <nav>
        {!usuario ? (
          <>
            <Link to="/">Início</Link>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
          </>
        ) : (
          <>
            <Link to="/organizador">Eventos</Link>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
