import { Link, useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(email, senha);
    navigate("/organizador");
  }

  return (
    <>
      <Cabecalho />
      <main className="container centro">
        <section className="form-box">
          <h2>Entrar</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="********"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

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
