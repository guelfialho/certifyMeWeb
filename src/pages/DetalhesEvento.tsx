import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function DetalhesEvento() {
  const { id } = useParams();

  // Participantes simulados
  const participantes = [
    { nome: "João Silva", email: "joao@email.com", cpf: "123.456.789-00" },
    { nome: "Maria Souza", email: "maria@email.com", cpf: "987.654.321-00" },
  ];

  return (
    <>
      <Cabecalho />
      <main className="container">
        <h2>Detalhes do Evento #{id}</h2>
        <h3>Participantes Confirmados</h3>
        <ul>
          {participantes.map((p, i) => (
            <li key={i}>
              {p.nome} — {p.email} — {p.cpf}
            </li>
          ))}
        </ul>
      </main>
      <Rodape />
    </>
  );
}
