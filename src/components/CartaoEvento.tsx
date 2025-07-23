import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import type { BuscarEvento } from "../types/evento";

interface Props {
  evento: BuscarEvento;
}

export default function CartaoEvento({ evento }: Props) {
  const navigate = useNavigate();

  const verDetalhes = () => {
    navigate(`/evento/${evento.id}`);
  };

  const linkQrCode = `${window.location.origin}/pages/certificado/${
    evento.id
  }?nomeEvento=${encodeURIComponent(evento.titulo)}`;

  const imprimirQr = () => {
    window.open(`/pages/eventoqrcode/${evento.id}`, "_blank");
  };

  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3>{evento.titulo}</h3>
        <p>
          <strong>Local:</strong> {evento.local}
        </p>
        <p>
          <strong>Data:</strong> {evento.data}
        </p>
        <p>{evento.descricao}</p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button onClick={verDetalhes}>Ver Detalhes</button>
        </div>
      </div>

      <div
        style={{
          marginLeft: "2rem",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 140,
          border: "1px solid #ccc",
          padding: "0.5rem",
          borderRadius: "8px",
          userSelect: "none",
        }}
      >
        <div
          onClick={() => window.open(linkQrCode, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <QRCode value={linkQrCode} size={90} />
        </div>

        <button
          onClick={imprimirQr}
          type="button"
          style={{
            marginTop: "0.5rem",
            fontSize: "0.8rem",
            padding: "0.25rem 0.5rem",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}
