// providers/PresencasProvider.tsx
import { PresencasContext } from "../context/PresencasContext";
import { useCallback } from "react";
import api from "../services/api";
import type { ConfirmarPresencaRequest } from "../types/presenca";

interface Props {
  children: React.ReactNode;
}

export function PresencasProvider({ children }: Props) {
  const confirmarPresenca = useCallback(
    async (dados: ConfirmarPresencaRequest) => {
      await api.post("/presencas", dados);
    },
    []
  );

  return (
    <PresencasContext.Provider value={{ confirmarPresenca }}>
      {children}
    </PresencasContext.Provider>
  );
}
