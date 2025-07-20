import { useContext } from "react";
import { EventosContext } from "../context/EventosContext";

export function useEventos() {
  const context = useContext(EventosContext);
  if (!context) {
    throw new Error("useEventos deve ser usado dentro de EventosProvider");
  }
  return context;
}
