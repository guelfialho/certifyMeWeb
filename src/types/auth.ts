export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  sucesso: boolean;
  mensagem: string;
  token?: string;
  usuario?: {
    id: string;
    nome: string;
    tipo: string;
  };
}

export interface Usuario {
  id: string;
  nome: string;
}

export interface AuthContextType {
  usuario: Usuario | null;
  login: (dados: Usuario) => void;
  logout: () => void;
}
