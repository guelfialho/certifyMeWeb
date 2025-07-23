import { createContext } from "react";
import type { BuscarEvento, NovoEvento } from "../types/evento";

interface EventosContextType {
  eventos: BuscarEvento[];
  criarNovoEvento: (evento: NovoEvento) => Promise<void>;
  carregarEventos: () => Promise<void>;
}

export const EventosContext = createContext<EventosContextType | undefined>(
  undefined
);
