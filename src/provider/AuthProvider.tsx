// context/AuthProvider.tsx
import { useState, type ReactNode } from "react";
import type { Usuario } from "../types/auth";
import { AuthContext } from "../context/AuthContext";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (dados: Usuario) => setUsuario(dados);
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
