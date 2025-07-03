import { useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import CartaoEvento from "../components/CartaoEvento";

interface Evento {
  id: number;
  nome: string;
  local: string;
  data: string;
  descricao: string;
}

export default function HomeOrganizador() {
  const [eventos, setEventos] = useState<Evento[]>([
    {
      id: 1,
      nome: "Semana de Computação",
      local: "UFBA",
      data: "2025-07-20",
      descricao: "Evento acadêmico da computação",
    },
  ]);

  const criarEvento = () => {
    const nome = prompt("Nome do evento:");
    const local = prompt("Local do evento:");
    const data = prompt("Data do evento (AAAA-MM-DD):");
    const descricao = prompt("Descrição:");
    if (nome && local && data && descricao) {
      const novoEvento: Evento = {
        id: eventos.length + 1,
        nome,
        local,
        data,
        descricao,
      };
      setEventos([...eventos, novoEvento]);
    }
  };

  return (
    <>
      <Cabecalho />
      <main className="container">
        <h2>Meus Eventos</h2>
        <button onClick={criarEvento}>+ Adicionar Evento</button>
        {eventos.map((evento) => (
          <CartaoEvento key={evento.id} evento={evento} />
        ))}
      </main>
      <Rodape />
    </>
  );
}
