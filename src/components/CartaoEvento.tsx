import { Link } from "react-router-dom";

interface Props {
  evento: {
    id: number;
    nome: string;
    local: string;
    data: string;
    descricao: string;
  };
}

export default function CartaoEvento({ evento }: Props) {
  return (
    <div className="card">
      <h3>{evento.nome}</h3>
      <p>
        <strong>Local:</strong> {evento.local}
      </p>
      <p>
        <strong>Data:</strong> {evento.data}
      </p>
      <p>{evento.descricao}</p>
      <Link to={`/evento/${evento.id}`}>
        <button>Ver Detalhes</button>
      </Link>
    </div>
  );
}
