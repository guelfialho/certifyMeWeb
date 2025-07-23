import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Certificado() {
  const { token } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const nomeEvento = queryParams.get("nomeEvento") || "Evento";

  const [expirado, setExpirado] = useState(false);

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
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: 4,
              border: "1px solid #ccc",
              outlineColor: "#007BFF",
            }}
            placeholder="000.000.000-00"
          />

          <button
            type="submit"
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem",
              backgroundColor: "#007BFF",
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            }
          >
            Confirmar
          </button>
        </form>
      </div>
      <Rodape />
    </>
  );
}
