import { createContext } from "react";
import type { EventosContextType } from "../provider/EventoProvider";

export const EventosContext = createContext<EventosContextType | undefined>(
  undefined
);
