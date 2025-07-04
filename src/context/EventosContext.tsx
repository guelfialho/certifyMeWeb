import { createContext, useState, useContext, type ReactNode } from "react";

export interface Evento {
  id: number;
  nome: string;
  local: string;
  data: string;
  descricao: string;
  participantes?: { nome: string; email: string; cpf: string }[];
}

interface EventosContextType {
  eventos: Evento[];
  adicionarEvento: (evento: Omit<Evento, "id">) => void;
}

const EventosContext = createContext<EventosContextType | undefined>(undefined);

export function EventosProvider({ children }: { children: ReactNode }) {
  const [eventos, setEventos] = useState<Evento[]>([
    {
      id: 1,
      nome: "Semana de Computação",
      local: "UFBA",
      data: "2025-07-20",
      descricao: "Evento acadêmico da computação",
      participantes: [
        { nome: "João Silva", email: "joao@email.com", cpf: "123.456.789-00" },
        {
          nome: "Maria Souza",
          email: "maria@email.com",
          cpf: "987.654.321-00",
        },
      ],
    },
    {
      id: 2,
      nome: "Certificação em UX Design",
      local: "Sala 204, Prédio B",
      data: "2025-08-30",
      descricao: "Treinamento intensivo sobre princípios e práticas de UX.",
      participantes: [
        {
          nome: "Carlos Lima",
          email: "carlos@email.com",
          cpf: "321.654.987-00",
        },
        { nome: "Ana Martins", email: "ana@email.com", cpf: "456.789.123-00" },
      ],
    },
  ]);

  function adicionarEvento(novoEvento: Omit<Evento, "id">) {
    const id = eventos.length > 0 ? eventos[eventos.length - 1].id + 1 : 1;
    setEventos([...eventos, { id, ...novoEvento, participantes: [] }]);
    // novos eventos começam com lista vazia de participantes
  }

  return (
    <EventosContext.Provider value={{ eventos, adicionarEvento }}>
      {children}
    </EventosContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEventos() {
  const context = useContext(EventosContext);
  if (!context) {
    throw new Error("useEventos deve ser usado dentro de EventosProvider");
  }
  return context;
}
