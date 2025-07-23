import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { usePresencas } from "../hooks/usePresencas";

export default function Certificado() {
  const { token } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { confirmarPresenca } = usePresencas();

  const queryParams = new URLSearchParams(location.search);
  const nomeEvento = queryParams.get("nomeEvento") || "Evento";

  const [expirado, setExpirado] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [erroForm, setErroForm] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setExpirado(true);
      return;
    }

    const tempoCriado = parseInt(token.slice(-4), 36) || 0;
    const tempoAgora = Date.now() % 100000;
    if (tempoAgora - tempoCriado > 5000) {
      setExpirado(true);
    }
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErroForm(null);
    setSucesso(null);
    setLoading(true);

    try {
      if (!token) {
        setErroForm("Token inválido.");
        return;
      }

      await confirmarPresenca({
        eventoId: token,
        nome,
        email,
        cpf,
      });

      setSucesso("Presença confirmada com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setErroForm(err?.message || "Erro ao confirmar presença.");
    } finally {
      setLoading(false);
    }
  }

  if (expirado) {
    return (
      <>
        <Cabecalho />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Token expirado</h2>
        </div>
        <Rodape />
      </>
    );
  }

  return (
    <>
      <Cabecalho />
      <div
        style={{
          maxWidth: 400,
          margin: "2rem auto",
          padding: "2rem",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}
        >
          Confirmação de Presença
        </h2>
        <h3
          style={{ textAlign: "center", marginBottom: "2rem", color: "#555" }}
        >
          Evento: {nomeEvento}
        </h3>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label style={{ fontWeight: "600", color: "#444" }}>Nome</label>
          <input
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: 4,
              border: "1px solid #ccc",
              outlineColor: "#007BFF",
            }}
            placeholder="Seu nome completo"
          />

          <label style={{ fontWeight: "600", color: "#444" }}>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: 4,
              border: "1px solid #ccc",
              outlineColor: "#007BFF",
            }}
            placeholder="email@exemplo.com"
          />

          <label style={{ fontWeight: "600", color: "#444" }}>CPF</label>
          <input
            type="text"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            pattern="\d{11}||\d{3}\.\d{3}\.\d{3}-\d{2}"
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: 4,
              border: "1px solid #ccc",
              outlineColor: "#007BFF",
            }}
            placeholder="000.000.000-00"
          />

          {erroForm && (
            <div style={{ color: "red", fontWeight: "600" }}>{erroForm}</div>
          )}
          {sucesso && (
            <div style={{ color: "green", fontWeight: "600" }}>{sucesso}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem",
              backgroundColor: loading ? "#80b3ff" : "#007BFF",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              borderRadius: 6,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = "#0056b3";
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = "#007BFF";
            }}
          >
            {loading ? "Confirmando..." : "Confirmar"}
          </button>
        </form>
      </div>
      <Rodape />
    </>
  );
}
