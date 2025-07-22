import { createContext } from "react";
import type { BuscarEvento } from "../types/evento";

interface EventosContextType {
  eventos: BuscarEvento[];
}

export const EventosContext = createContext<EventosContextType | undefined>(
  undefined
);
