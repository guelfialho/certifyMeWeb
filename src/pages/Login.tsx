import { Link } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Login() {
  return (
    <>
      <Cabecalho />
      <main className="container centro">
        <section className="form-box">
          <h2>Entrar</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="seu@email.com" required />

            <label>Senha</label>
            <input type="password" placeholder="********" required />

            <button type="submit" className="cta">
              Entrar
            </button>
          </form>
          <p className="mensagem">
            Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </section>
      </main>
      <Rodape />
    </>
  );
}
