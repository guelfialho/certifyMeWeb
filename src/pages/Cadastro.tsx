import { Link } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Cadastro() {
  return (
    <>
      <Cabecalho />
      <main className="container">
        <h2>Cadastro</h2>
        <form>
          <label>Nome</label>
          <input type="text" placeholder="Seu nome completo" required />

          <label>Email</label>
          <input type="email" placeholder="seu@email.com" required />

          <label>Senha</label>
          <input type="password" placeholder="********" required />

          <button type="submit">Cadastrar</button>
        </form>
        <p>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </main>
      <Rodape />
    </>
  );
}
