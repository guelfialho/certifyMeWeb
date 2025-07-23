// context/PresencasContext.ts
import { createContext } from "react";
import type { ConfirmarPresencaRequest } from "../types/presenca";

interface PresencasContextProps {
  confirmarPresenca: (dados: ConfirmarPresencaRequest) => Promise<void>;
}

export const PresencasContext = createContext<PresencasContextProps>({
  confirmarPresenca: async () => {},
});
