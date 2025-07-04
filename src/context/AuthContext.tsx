import { createContext, useContext, useState } from "react";

interface Usuario {
  nome: string;
  email: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  login: (email: string, senha: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (email: string, senha: string) => {
    // Mock: login sempre dá certo
    setUsuario({ nome: "Organizador", email });
  };

  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth precisa estar dentro do AuthProvider");
  return context;
}
