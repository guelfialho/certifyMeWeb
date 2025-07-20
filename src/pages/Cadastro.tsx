import { Link, useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { useState } from "react";
import api from "../services/api";
import type { CadastroResponse } from "../types/cadastro";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setSucesso("");

    try {
      const response = await api.post<CadastroResponse>("/usuarios/cadastro", {
        nome,
        email,
        senha,
      });

      const data = response.data;

      if (data.sucesso) {
        setSucesso(data.mensagem || "Usuário cadastrado com sucesso.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErro(data.mensagem || "Erro desconhecido. Tente novamente.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error);
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
          <h2>Cadastro</h2>

          {/* Exibe mensagem de erro ou sucesso */}
          {erro && <div className="mensagem-erro">{erro}</div>}
          {sucesso && <div className="mensagem-sucesso">{sucesso}</div>}

          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Seu nome completo"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

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
