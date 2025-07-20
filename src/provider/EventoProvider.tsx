import { useState, type ReactNode } from "react";
import type { Evento } from "../types/evento";
import { EventosContext } from "../context/EventosContext";

export interface EventosContextType {
  eventos: Evento[];
  adicionarEvento: (evento: Evento) => void;
  setEventos: (eventos: Evento[]) => void;
}

interface Props {
  children: ReactNode;
}

export function EventosProvider({ children }: Props) {
  const [eventos, setEventos] = useState<Evento[]>([]);

  function adicionarEvento(evento: Evento) {
    setEventos((old) => [...old, evento]);
  }

  return (
    <EventosContext.Provider value={{ eventos, adicionarEvento, setEventos }}>
      {children}
    </EventosContext.Provider>
  );
}
