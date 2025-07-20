import { Link, useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../hooks/useAuth";
import type { LoginResponse } from "../types/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    try {
      const response = await api.post<LoginResponse>("/login", {
        email,
        senha,
      });

      const data = response.data;

      if (data.sucesso && data.usuario) {
        localStorage.setItem("token", data.token!);

        login({
          id: data.usuario.id,
          nome: data.usuario.nome,
        });

        navigate("/organizador");
      } else {
        setErro(
          data.mensagem || "Erro desconhecido. Entre em contato com o suporte."
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);

      if (error.response?.data?.mensagem) {
        setErro(error.response.data.mensagem);
      } else {
        setErro("Erro ao se conectar com o servidor.");
      }
    }
  }

  return (
    <>
      <Cabecalho />
      <main className="container centro">
        <section className="form-box">
          <h2>Entrar</h2>

          {erro && <div className="mensagem-erro">{erro}</div>}

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
