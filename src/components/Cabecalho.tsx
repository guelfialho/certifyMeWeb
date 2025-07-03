import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
      <h2>CertifyMe</h2>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/organizador">Eventos</Link>
      </nav>
    </header>
  );
}
