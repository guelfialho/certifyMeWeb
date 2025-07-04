import { useNavigate } from "react-router-dom";
import { FaQrcode } from "react-icons/fa";

interface Evento {
  id: number;
  nome: string;
  local: string;
  data: string;
  descricao: string;
}

interface Props {
  evento: Evento;
}

export default function CartaoEvento({ evento }: Props) {
  const navigate = useNavigate();

  const verDetalhes = () => {
    navigate(`/evento/${evento.id}`);
  };

  const verQrcode = () => {
    navigate(`/pages/eventoqrcode/${evento.id}`);
  };

  return (
    <div className="card">
      <h3>{evento.nome}</h3>
      <p><strong>Local:</strong> {evento.local}</p>
      <p><strong>Data:</strong> {evento.data}</p>
      <p>{evento.descricao}</p>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "1rem" }}>
        <button onClick={verDetalhes}>Ver Detalhes</button>
        <button onClick={verQrcode} className="btn-qr">
          <FaQrcode />
        </button>
      </div>
    </div>
  );
}
