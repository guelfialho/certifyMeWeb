import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { useEventos } from "../hooks/useEventos";

export default function DetalhesEvento() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { eventos } = useEventos();

  const evento = eventos.find((e) => e.id === id);

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
        <button
          onClick={() => navigate("/organizador")}
          style={{ marginBottom: "1.5rem" }}
        >
          ← Voltar para eventos
        </button>

        <div className="card">
          <h2 style={{ color: "#004080", marginBottom: "1rem" }}>
            Detalhes do Evento
          </h2>

          <section style={{ marginBottom: "2rem" }}>
            <p>
              <strong>Nome do evento:</strong> {evento.titulo}
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
              {(evento.participantes ?? []).map((p, i) => (
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
