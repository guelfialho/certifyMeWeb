import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

const eventosFake = [
  {
    id: "1",
    nome: "Certificação ReactJS",
    data: "25/07/2025",
    local: "Auditório Central",
    descricao:
      "Workshop voltado para desenvolvedores React iniciantes/intermediários.",
    participantes: [
      { nome: "João Silva", email: "joao@email.com", cpf: "123.456.789-00" },
      { nome: "Maria Souza", email: "maria@email.com", cpf: "987.654.321-00" },
    ],
  },
  {
    id: "2",
    nome: "Certificação em UX Design",
    data: "30/08/2025",
    local: "Sala 204, Prédio B",
    descricao: "Treinamento intensivo sobre princípios e práticas de UX.",
    participantes: [
      { nome: "Carlos Lima", email: "carlos@email.com", cpf: "321.654.987-00" },
      { nome: "Ana Martins", email: "ana@email.com", cpf: "456.789.123-00" },
    ],
  },
];

export default function DetalhesEvento() {
  const { id } = useParams();
  const navigate = useNavigate();

  const evento = eventosFake.find((e) => e.id === id);

  if (!evento) {
    return (
      <>
        <Cabecalho />
        <main className="container">
          <button
            onClick={() => navigate("/organizador")}
            style={{ marginBottom: "1.5rem" }}
          >
            ← Voltar para eventos
          </button>
          <div className="card">
            <h2 style={{ color: "#c00" }}>Evento não encontrado</h2>
            <p>Verifique se o ID do evento está correto.</p>
          </div>
        </main>
        <Rodape />
      </>
    );
  }

  return (
    <>
      <Cabecalho />
      <main className="container">
        {/* Botão de voltar FORA do card */}
        <button
          onClick={() => navigate("/organizador")}
          style={{ marginBottom: "1.5rem" }}
        >
          ← Voltar para eventos
        </button>

        <div className="card">
          <h2 style={{ color: "#004080", marginBottom: "1rem" }}>
            Detalhes do Evento #{evento.id}
          </h2>

          <section style={{ marginBottom: "2rem" }}>
            <p>
              <strong>Nome do evento:</strong> {evento.nome}
            </p>
            <p>
              <strong>Data:</strong> {evento.data}
            </p>
            <p>
              <strong>Local:</strong> {evento.local}
            </p>
            <p>
              <strong>Descrição:</strong> {evento.descricao}
            </p>
          </section>

          <section>
            <h3 style={{ marginBottom: "1rem" }}>Participantes Confirmados</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {evento.participantes.map((p, i) => (
                <li
                  key={i}
                  style={{
                    padding: "0.75rem",
                    borderBottom: "1px solid #eee",
                    fontSize: "0.95rem",
                  }}
                >
                  <strong>{p.nome}</strong>
                  <br />
                  <span>
                    {p.email} · CPF: {p.cpf}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Rodape />
    </>
  );
}
