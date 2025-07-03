import { Link } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Cadastro() {
  return (
    <>
      <Cabecalho />
      <main className="container centro">
        <section className="form-box">
          <h2>Cadastro</h2>
          <form>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome completo" required />

            <label>Email</label>
            <input type="email" placeholder="seu@email.com" required />

            <label>Senha</label>
            <input type="password" placeholder="********" required />

            <button type="submit" className="cta">
              Cadastrar
            </button>
          </form>
          <p className="mensagem">
            Já tem conta? <Link to="/login">Entrar</Link>
          </p>
        </section>
      </main>
      <Rodape />
    </>
  );
}
