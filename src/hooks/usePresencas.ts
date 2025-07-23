import { useContext } from "react";
import { PresencasContext } from "../context/PresencasContext";

export function usePresencas() {
  return useContext(PresencasContext);
}
